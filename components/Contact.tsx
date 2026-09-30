"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 6-10 7L2 6"></path>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"></path>
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Fixed: Added explicit type union for status
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  // Fixed: Typed 'e' as FormEvent
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: key,
        name: name,
        email: email,
        message: message,
        subject: "New message from your portfolio",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Say hi</div>
          <h2 className={"font-display sectionTitle"}>Let&apos;s talk data</h2>
        </div>

        <div className={styles.grid}>
          <div>
            <p className={styles.blurb}>
              Always happy to chat about a project, an opening, or just data in general.
              I&apos;m actively looking for my first data analyst role &mdash; drop a message
              and I&apos;ll get back to you soon.
            </p>
            <div className={styles.quickLinks}>
              <a href="mailto:maryanngumafelix08@gmail.com" className={styles.quickLink}>
                <span className={styles.quickIcon}><MailIcon /></span>
                maryanngumafelix08@gmail.com
              </a>
              <a href="https://github.com/mayimeow" target="_blank" rel="noreferrer" className={styles.quickLink}>
                <span className={styles.quickIcon}><GithubIcon /></span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mary-ann-gumafelix-724663313/" target="_blank" rel="noreferrer" className={styles.quickLink}>
                <span className={styles.quickIcon}><LinkedinIcon /></span>
                LinkedIn
              </a>
            </div>
          </div>

          <form className={styles.panel} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let's talk about the analyst role..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <div className={styles.status + " " + styles.statusSuccess}>
                Sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className={styles.status + " " + styles.statusError}>
                Something went wrong. Try again, or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}