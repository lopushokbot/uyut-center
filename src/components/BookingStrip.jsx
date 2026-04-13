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

export default function BookingStrip() {
  const widgetId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const bookingFormId = `booking-form-${widgetId}`;
  const roomsListId = `rooms-list-${widgetId}`;
  const calendarId = `availability-calendar-${widgetId}`;
  const mobileButtonId = `mobile-availability-button-${widgetId}`;

  useEffect(() => {
    let cancelled = false;

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

        HotelWidget.add({
          type: "bookingForm",
          inline: true,
          appearance: {
            container: bookingFormId,
          },
        });

        HotelWidget.add({
          type: "roomsList",
          appearance: {
            container: roomsListId,
          },
        });

        HotelWidget.add({
          type: "availabilityCalendar",
          months: 1,
          appearance: {
            container: calendarId,
          },
        });

        HotelWidget.add({
          type: "showCheckAvailabilityButtonForMobileDevices",
          appearance: {
            container: mobileButtonId,
          },
        });
      })
      .catch((error) => {
        console.error("HotelWidget script load failed", error);
      });

    return () => {
      cancelled = true;
    };
  }, [bookingFormId, roomsListId, calendarId, mobileButtonId]);

  return (
    <section className="booking-widget-section">
      <div className="booking-strip booking-widget-shell">
        <div
          id={bookingFormId}
          className="booking-widget-container booking-widget-form"
        />
      </div>

      <div id={mobileButtonId} className="booking-widget-mobile-button" />
    </section>
  );
}
