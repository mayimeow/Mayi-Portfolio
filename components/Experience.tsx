import styles from "./Experience.module.css";

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );
}

var jobs = [
  {
    role: "Intern, Data Science Department",
    company: "Prime Outsourcing Inc.",
    dates: "Jul 2025 \u2013 Sep 2025",
    bullets: [
      "Engineered automated data workflows using Google Apps Script within Google Sheets, cutting manual data processing time.",
      "Architected and deployed interactive dashboards in Google Looker Studio to track KPIs and visualize sales trends for leadership.",
      "Applied data science techniques to real-world business challenges, contributing to data-driven operational improvements.",
    ],
  },
  {
    role: "Intern, Data Modeler",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    dates: "Aug 2024 \u2013 Oct 2024",
    bullets: [
      "Architected and normalized relational databases using MySQL, improving data integrity and eliminating redundancy.",
      "Developed comprehensive Entity-Relationship Diagrams (ERDs) via Lucidchart to streamline development planning.",
      "Standardized data modeling practices, facilitating cross-functional collaboration with UI/UX teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Experience</div>
          <h2 className={"font-display sectionTitle"}>Where I have worked</h2>
        </div>

        <div className={styles.list}>
          {jobs.map(function (job, index) {
            var isLast = index === jobs.length - 1;
            return (
              <div key={job.role} className={styles.row}>
                <div className={styles.nodeCol}>
                  <div className={styles.node}>
                    <BriefcaseIcon />
                  </div>
                  {!isLast && <div className={styles.railLine}></div>}
                </div>
                <div className={styles.cardWrap}>
                  <div className={styles.card}>
                    <div className={styles.topRow}>
                      <div>
                        <div className={"font-display " + styles.role}>{job.role}</div>
                        <div className={styles.company}>{job.company}</div>
                      </div>
                      <div className={"font-mono " + styles.dates}>{job.dates}</div>
                    </div>
                    <ul className={styles.bullets}>
                      {job.bullets.map(function (b, i) {
                        return <li key={i}>{b}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
