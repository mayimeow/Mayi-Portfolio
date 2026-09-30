"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "overview", label: "hey!" },
  { id: "projects", label: "projects" },
  { id: "resume", label: "resume" },
  { id: "contact", label: "say hi" },
];

export default function Nav() {
  const [active, setActive] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 10);

      if (window.scrollY < 80) {
        setActive("overview");
        return;
      }

      var current = "overview";
      for (var i = 0; i < links.length; i++) {
        var el = document.getElementById(links[i].id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          current = links[i].id;
        }
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    var t1 = setTimeout(onScroll, 400);
    var t2 = setTimeout(onScroll, 1200);
    return function () {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className={styles.topbar}
      style={{
        boxShadow: scrolled ? "0 6px 18px rgba(58,35,64,0.08)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className={"wrap " + styles.inner}>
        <div className={styles.brand}>
          <span className={styles.led}></span>
          mayi.exe
        </div>
        <div className={styles.right}>
          <div className={styles.pill}>
            {links.map(function (navLink) {
              var isActive = active === navLink.id;
              return (
                <a key={navLink.id} href={"#" + navLink.id} className={styles.tab + (isActive ? " " + styles.tabActive : "")}>
                  {navLink.label}
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
