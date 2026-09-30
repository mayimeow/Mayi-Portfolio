import Image from "next/image";
import styles from "./Hero.module.css";

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z"></path>
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"></path>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"></path>
      <path d="M17 5h3a2 2 0 0 1-2 4"></path>
      <path d="M7 5H4a2 2 0 0 0 2 4"></path>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

var stats = [
  { icon: <BriefcaseIcon />, num: "2", label: "Internships Completed" },
  { icon: <ChartIcon />, num: "9+", label: "Projects Built" },
  { icon: <CapIcon />, num: "4", label: "Certifications Earned" },
  { icon: <TrophyIcon />, num: "'22\u2013'24", label: "President's Lister" },
];

export default function Hero() {
  return (
    <section id="overview" className={styles.hero}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <div className={styles.badge}>Open to data analyst roles</div>

            <h1 className={"font-display " + styles.heading}>
              Hi, I am Mayi. I turn messy data into <span className={styles.accent}>clear stories</span>.
            </h1>

            <p className={styles.sub}>
              Mary Ann Gumafelix &mdash; Computer Engineering student at Polytechnic University of the Philippines,
              majoring in Big Data Analytics. I build dashboards, clean pipelines, and full-stack data apps.
            </p>

            <div className={styles.chips}>
              <span className={styles.chip + " " + styles.chipPink}>CompEng, PUP</span>
              <span className={styles.chip + " " + styles.chipLav}>Big Data Analytics</span>
              <span className={styles.chip + " " + styles.chipPink}>Open to work</span>
            </div>

            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary">
                See my work
              </a>
              <a href="/resume.pdf" className="btn">
                Resume
              </a>
              <a href="https://github.com/yourusername" className="btn">
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.photoCol}>
            <div className={styles.glow}></div>
            <div className={styles.photoFrame}>
              <div className={styles.flipInner}>
                <div className={styles.flipFace}>
                  <Image
                    src="/me.jpg"
                    alt="Mayi Gumafelix"
                    width={260}
                    height={325}
                    style={{ objectFit: "cover", objectPosition: "center 15%", width: "100%", height: "100%" }}
                    priority
                  />
                </div>
                <div className={styles.flipFace + " " + styles.flipBack}>
                  <Image
                    src="/me2.jpg"
                    alt="Mayi Gumafelix"
                    width={260}
                    height={325}
                    style={{ objectFit: "cover", objectPosition: "center 15%", width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.pin}>
              <PinIcon />
              Manila, PH
            </div>
          </div>
        </div>

        <div className={styles.statsBar}>
          {stats.map(function (stat) {
            return (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={"font-display " + styles.statNum}>{stat.num}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
