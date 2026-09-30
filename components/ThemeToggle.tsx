"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(function () {
    var saved = "light";
    try {
      saved = window.localStorage.getItem("theme") || "light";
    } catch (e) {}
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
    setMounted(true);
  }, []);

  function toggle() {
    var next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {}
  }

  var isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "var(--panel)",
        color: "var(--pink-deep)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {mounted && isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="12" y1="2" x2="12" y2="4"></line>
          <line x1="12" y1="20" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="4" y2="12"></line>
          <line x1="20" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );
}
