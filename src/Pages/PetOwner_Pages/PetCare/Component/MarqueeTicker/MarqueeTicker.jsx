import React, { useEffect, useRef, useState } from "react";
import "./MarqueeTicker.css";

function MarqueeTicker({ updates = [], speed = 80 }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [locationText, setLocationText] = useState("Fetching location...");
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

 
  useEffect(() => {
    const tick = setInterval(() => {
      if (!mountedRef.current) return;
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(tick);
  }, []);

 
  useEffect(() => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      if (mountedRef.current) setLocationText("Geolocation not supported");
      return;
    }

    const success = async (pos) => {
      if (!mountedRef.current) return;
      const lat = pos.coords.latitude.toFixed(4);
      const lon = pos.coords.longitude.toFixed(4);

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`
        );
        if (!res.ok) throw new Error("Geocode failed");

        const data = await res.json();
        const city =
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.village ||
          data?.address?.hamlet ||
          data?.address?.county;
        const country = data?.address?.country;

        if (!mountedRef.current) return;
        if (city && country) {
          setLocationText(`${city}, ${country}`);
        } else if (country) {
          setLocationText(country);
        } else {
          setLocationText(`Lat: ${lat}, Lon: ${lon}`);
        }
      } catch (error) {
        console.error("Reverse geocode failed:", error);
        if (mountedRef.current) setLocationText(`Lat: ${lat}, Lon: ${lon}`);
      }
    };

    const failure = (error) => {
      if (!mountedRef.current) return;
      if (error && error.code === 1) {
        setLocationText("Location access denied");
      } else {
        setLocationText("Unable to retrieve location");
      }
    };

    navigator.geolocation.getCurrentPosition(success, failure);

  }, []);

  const content = [
    `Time: ${time}`,
    `Location: ${locationText}`,
    ...updates,
  ].join("   •   ");

  const approxPx = Math.max(900, content.length * 12);
  const durationSeconds = Math.max(6, Math.round(approxPx / speed));

  return (
    <div
      className="marquee-wrapper"
      role="region"
      aria-label="Site updates ticker"
    >
      <div
        className="marquee-track"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="marquee-content">{content}</div>
        <div className="marquee-content" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MarqueeTicker;
