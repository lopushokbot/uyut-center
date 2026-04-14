"use client";

import { useEffect, useId } from "react";

const WIDGET_SCRIPT_SRC = "https://bookonline24.ru/widget.js";
const HOTEL_ID = "07c2c0c9-cfa1-4695-922f-3561eb94b637";

let widgetScriptPromise;
let widgetInitialized = false;

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

function trySelectRoom(containerId, selectedRoomName) {
  if (!selectedRoomName || typeof window === "undefined") {
    return;
  }

  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  const normalize = (value) =>
    value
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const targetRoomName = normalize(selectedRoomName);
  const clickableSelectors = [
    "button",
    "a",
    "[role='button']",
    "[data-room-id]",
    "[data-testid]",
  ].join(", ");

  const findAndClickRoom = () => {
    const clickableElements = Array.from(
      container.querySelectorAll(clickableSelectors),
    );

    const directAction = clickableElements.find((element) =>
      normalize(element.textContent || "").includes(targetRoomName),
    );

    if (directAction) {
      directAction.click();
      return true;
    }

    const matchingBlock = Array.from(container.querySelectorAll("*")).find(
      (element) => normalize(element.textContent || "").includes(targetRoomName),
    );

    const nestedAction = matchingBlock?.querySelector(clickableSelectors);

    if (nestedAction) {
      nestedAction.click();
      return true;
    }

    return false;
  };

  if (findAndClickRoom()) {
    return;
  }

  window.setTimeout(findAndClickRoom, 700);
}

export default function BookingStrip({
  className = "",
  mode = "inline",
  selectedRoomName,
}) {
  const widgetId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const bookingFormId = `booking-form-${widgetId}`;
  const roomsListId = `rooms-list-${widgetId}`;
  const calendarId = `availability-calendar-${widgetId}`;
  const mobileButtonId = `mobile-availability-button-${widgetId}`;

  useEffect(() => {
    let cancelled = false;
    let widgetIds = [];

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
              onInit: () => {
                console.log("HotelWidget onInit");
              },
              onBooking: (value) => {
                console.log("HotelWidget onBooking", value);
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

          trySelectRoom(roomsListId, selectedRoomName);
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
