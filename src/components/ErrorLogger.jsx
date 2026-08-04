"use client";

import { useEffect } from "react";

export default function ErrorLogger() {
  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      console.log({
        message,
        source,
        lineno,
        colno,
        stack: error?.stack,
      });
    };

    window.onunhandledrejection = function (event) {
      console.log(event.reason);
    };
  }, []);

  return null;
}