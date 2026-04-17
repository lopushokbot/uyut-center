"use client";

import { useEffect, useId } from "react";

const WIDGET_SCRIPT_SRC = "https://bookonline24.ru/widget.js";
const HOTEL_ID = "07c2c0c9-cfa1-4695-922f-3561eb94b637";
const WIDGET_ROOMS_LIST_SELECTOR = 'div[id^="roomsList_"]';
const WIDGET_ROOM_TITLE_SELECTOR = ".FJbBVA";
const WIDGET_ROOM_ACTION_SELECTOR = 'button[data-tid="Button__rootElement"]';
const WIDGET_SCROLL_CONTAINER_SELECTOR = ".booking-widget-rooms";
const ROOM_HIGHLIGHT_CLASS = "booking-widget-room-match";
const ROOM_SELECTION_TIMEOUT_MS = 10000;
const ROOM_SELECTION_RETRY_MS = 250;

let widgetScriptPromise;
let widgetInitialized = false;

function normalizeRoomName(value = "") {
  return value
    .replace(/[«»]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadWidgetScript() {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (window.HotelWidget) {
    return Promise.resolve(window.HotelWidget);
  }

  if (!widgetScriptPromise) {
    widgetScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector(
        `script[src="${WIDGET_SCRIPT_SRC}"]`,
      );

      if (existingScript) {
        existingScript.addEventListener("load", () =>
          resolve(window.HotelWidget),
        );
        existingScript.addEventListener("error", reject);
        return;
      }

      const script = document.createElement("script");
      script.src = WIDGET_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve(window.HotelWidget);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  return widgetScriptPromise;
}

function findRoomCardElement(titleElement, roomsListElement) {
  let currentElement = titleElement;

  while (currentElement && currentElement !== roomsListElement) {
    // The first ancestor with the action button is the most stable card wrapper we can use.
    if (currentElement.querySelector?.(WIDGET_ROOM_ACTION_SELECTOR)) {
      return currentElement;
    }

    currentElement = currentElement.parentElement;
  }

  return titleElement.parentElement;
}

function findRoomCardByName(roomsListElement, selectedRoomName) {
  const targetRoomName = normalizeRoomName(selectedRoomName);

  if (!targetRoomName) {
    return null;
  }

  const roomTitles = Array.from(
    roomsListElement.querySelectorAll(WIDGET_ROOM_TITLE_SELECTOR),
  );

  for (const roomTitle of roomTitles) {
    if (normalizeRoomName(roomTitle.textContent) !== targetRoomName) {
      continue;
    }

    const roomCard = findRoomCardElement(roomTitle, roomsListElement);

    if (roomCard) {
      return {
        roomCard,
        roomTitle,
      };
    }
  }

  return null;
}

function scrollRoomCardIntoView(scrollContainer, roomCard) {
  const containerRect = scrollContainer.getBoundingClientRect();
  const cardRect = roomCard.getBoundingClientRect();
  const targetTop =
    scrollContainer.scrollTop + cardRect.top - containerRect.top - 16;

  scrollContainer.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth",
  });
}

function highlightRoomCard(roomCard) {
  roomCard.classList.add(ROOM_HIGHLIGHT_CLASS);

  window.setTimeout(() => {
    roomCard.classList.remove(ROOM_HIGHLIGHT_CLASS);
  }, 2400);
}

function clickAvailabilityButton(roomCard) {
  const actionButton = roomCard.querySelector(WIDGET_ROOM_ACTION_SELECTOR);
  const buttonText = normalizeRoomName(actionButton?.textContent);

  if (
    !actionButton ||
    actionButton.disabled ||
    !buttonText.includes(normalizeRoomName("Проверить наличие"))
  ) {
    return false;
  }

  window.setTimeout(() => {
    actionButton.click();
  }, 260);

  return true;
}

function syncSelectedRoomInWidget(containerId, selectedRoomName) {
  if (!selectedRoomName || typeof window === "undefined") {
    return () => {};
  }

  const hostContainer = document.getElementById(containerId);

  if (!hostContainer) {
    return () => {};
  }

  let stopped = false;
  let syncCompleted = false;
  let timeoutId = null;
  let retryId = null;
  let observer = null;

  const trySyncRoom = () => {
    if (stopped || syncCompleted) {
      return false;
    }

    const roomsListElement =
      hostContainer.matches(WIDGET_ROOMS_LIST_SELECTOR)
        ? hostContainer
        : hostContainer.querySelector(WIDGET_ROOMS_LIST_SELECTOR);
    const scrollContainer =
      hostContainer.closest(WIDGET_SCROLL_CONTAINER_SELECTOR) ||
      document.querySelector(WIDGET_SCROLL_CONTAINER_SELECTOR);

    if (!roomsListElement || !scrollContainer) {
      return false;
    }

    // The widget renders asynchronously, so we keep retrying until the target card appears.
    const roomMatch = findRoomCardByName(roomsListElement, selectedRoomName);

    if (!roomMatch) {
      return false;
    }

    scrollRoomCardIntoView(scrollContainer, roomMatch.roomCard);
    highlightRoomCard(roomMatch.roomCard);
    clickAvailabilityButton(roomMatch.roomCard);

    syncCompleted = true;
    observer?.disconnect();

    if (retryId) {
      window.clearInterval(retryId);
    }

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    return true;
  };

  timeoutId = window.setTimeout(() => {
    stopped = true;
    observer?.disconnect();

    if (retryId) {
      window.clearInterval(retryId);
    }
  }, ROOM_SELECTION_TIMEOUT_MS);

  retryId = window.setInterval(trySyncRoom, ROOM_SELECTION_RETRY_MS);

  observer = new MutationObserver(() => {
    trySyncRoom();
  });

  observer.observe(hostContainer, {
    childList: true,
    subtree: true,
  });

  trySyncRoom();

  return () => {
    stopped = true;
    observer?.disconnect();

    if (retryId) {
      window.clearInterval(retryId);
    }

    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
  };
}

function trySelectRoom(containerId, selectedRoomName) {
  if (!selectedRoomName || typeof window === "undefined") {
    return;
  }

  return syncSelectedRoomInWidget(containerId, selectedRoomName);
}

export default function BookingStrip({
  className = "",
  mode = "inline",
  selectedRoomName,
  selectedWidgetRoomName,
}) {
  const widgetId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const bookingFormId = `booking-form-${widgetId}`;
  const roomsListId = `rooms-list-${widgetId}`;
  const calendarId = `availability-calendar-${widgetId}`;
  const mobileButtonId = `mobile-availability-button-${widgetId}`;

  useEffect(() => {
    let cancelled = false;
    let widgetIds = [];
    let cleanupRoomSelection = () => {};

    loadWidgetScript()
      .then((HotelWidget) => {
        if (cancelled || !HotelWidget) {
          return;
        }

        if (!widgetInitialized) {
          HotelWidget.init({
            hotelId: HOTEL_ID,
            version: "2",
            hooks: {
              onError: (error) => {
                console.error("HotelWidget onError", error);
              },
            },
          });
          widgetInitialized = true;
        }

        [bookingFormId, roomsListId, calendarId, mobileButtonId].forEach(
          (containerId) => {
            const container = document.getElementById(containerId);

            if (container) {
              container.innerHTML = "";
            }
          },
        );

        const bookingWidget = HotelWidget.add({
          type: "bookingForm",
          inline: true,
          appearance: {
            container: bookingFormId,
          },
        });
        widgetIds.push(bookingWidget.id);

        if (mode === "modal") {
          const roomsWidget = HotelWidget.add({
            type: "roomsList",
            appearance: {
              container: roomsListId,
            },
          });
          widgetIds.push(roomsWidget.id);

          const calendarWidget = HotelWidget.add({
            type: "availabilityCalendar",
            months: 1,
            appearance: {
              container: calendarId,
            },
          });
          widgetIds.push(calendarWidget.id);

          cleanupRoomSelection = trySelectRoom(
            roomsListId,
            selectedWidgetRoomName || selectedRoomName,
          );
        }

        const mobileButtonWidget = HotelWidget.add({
          type: "showCheckAvailabilityButtonForMobileDevices",
          appearance: {
            container: mobileButtonId,
          },
        });
        widgetIds.push(mobileButtonWidget.id);
      })
      .catch((error) => {
        console.error("HotelWidget script load failed", error);
      });

    return () => {
      cancelled = true;
      cleanupRoomSelection();

      if (typeof window !== "undefined" && window.HotelWidget) {
        widgetIds.forEach((widgetId) => {
          try {
            window.HotelWidget.remove(widgetId);
          } catch (error) {
            console.error("HotelWidget remove failed", error);
          }
        });
      }
    };
  }, [
    bookingFormId,
    roomsListId,
    calendarId,
    mobileButtonId,
    mode,
    selectedRoomName,
    selectedWidgetRoomName,
  ]);

  return (
    <section
      className={`booking-widget-section ${
        mode === "modal" ? "booking-widget-section-modal" : ""
      } ${className}`.trim()}
    >
      <div
        className={`booking-strip booking-widget-shell ${
          mode === "modal" ? "booking-widget-shell-modal" : ""
        }`.trim()}
      >
        <div
          id={bookingFormId}
          className="booking-widget-container booking-widget-form"
        />
      </div>

      {mode === "modal" ? (
        <div className="booking-widget-details">
          <div className="booking-widget-header">
            <div className="section-label">Онлайн-бронирование</div>
            <h3 className="section-title">Выбор номера и дат проживания</h3>
            <p className="section-desc">
              {selectedRoomName
                ? `Выбранный номер: ${selectedRoomName}. Уточните даты проживания и завершите бронирование.`
                : "Выберите подходящий номер, даты проживания и завершите бронирование онлайн."}
            </p>
          </div>

          <div className="booking-widget-grid">
            <div
              id={roomsListId}
              className="booking-widget-container booking-widget-rooms"
            />
            <div className="booking-widget-sidebar">
              <div
                id={calendarId}
                className="booking-widget-container booking-widget-calendar"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div id={mobileButtonId} className="booking-widget-mobile-button" />
    </section>
  );
}
