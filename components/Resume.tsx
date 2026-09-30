"use client";

import { useEffect, useState } from "react";
import styles from "./Resume.module.css";

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default function Resume() {
  var openState = useState(false);
  var isOpen = openState[0];
  var setIsOpen = openState[1];

  useEffect(function () {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return function () {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="resume" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Resume</div>
          <h2 className={"font-display sectionTitle"}>Take a look</h2>
        </div>

        <p className={styles.blurb}>
          A quick look at my background, or grab the PDF to keep.
        </p>

        <div className={styles.actions}>
          <button className={"btn btn-primary " + styles.viewBtn} onClick={function () { setIsOpen(true); }}>
            <EyeIcon />
            View resume
          </button>
          <a href="/resume.pdf" download className="btn">
            Download PDF
          </a>
        </div>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={function () { setIsOpen(false); }}>
          <div className={styles.modal} onClick={function (e) { e.stopPropagation(); }}>
            <div className={styles.modalBar}>
              <span className={styles.dot} style={{ background: "var(--pink)" }}></span>
              <span className={styles.dot} style={{ background: "var(--lav)" }}></span>
              <span className={styles.dot} style={{ background: "var(--gold)" }}></span>
              <span className={styles.fileLabel}>resume.pdf</span>
              <button className={styles.closeBtn} onClick={function () { setIsOpen(false); }} aria-label="Close">
                <CloseIcon />
              </button>
            </div>
            <iframe src="/resume.pdf" className={styles.frame} title="Mayi Gumafelix Resume"></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
