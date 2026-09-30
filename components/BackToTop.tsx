"use client";

import { useEffect, useState } from "react";

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  );
}

export default function BackToTop() {
  var state = useState(false);
  var show = state[0];
  var setShow = state[1];

  useEffect(function () {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "linear-gradient(90deg, var(--pink), var(--pink-deep))",
        color: "#fff",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 24px rgba(224,65,127,0.4)",
        cursor: "pointer",
        zIndex: 40,
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: "opacity .2s ease, transform .2s ease",
      }}
    >
      <ArrowUpIcon />
    </button>
  );
}
