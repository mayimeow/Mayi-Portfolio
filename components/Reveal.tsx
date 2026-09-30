"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal(props) {
  var children = props.children;
  var ref = useRef(null);
  var state = useState(false);
  var visible = state[0];
  var setVisible = state[1];

  useEffect(function () {
    var el = ref.current;
    if (!el) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);

    return function () {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity .7s ease, transform .7s ease",
      }}
    >
      {children}
    </div>
  );
}
