import styles from "./Certifications.module.css";

function CertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5"></path>
    </svg>
  );
}

var certs = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    desc: "Foundational networking knowledge including IP addressing, Ethernet protocols, and configuring routers, switches, and end devices.",
  },
  {
    title: "Big Data Fundamentals with PySpark",
    issuer: "DataCamp",
    desc: "Explored big data concepts using PySpark for scalable processing, applying SparkSQL and MLlib across text, sports, and genetic datasets.",
  },
  {
    title: "Building Dashboards with Dash and Plotly",
    issuer: "DataCamp",
    desc: "Built interactive web-based dashboards using Plotly and Dash, presenting insights through dynamic visualizations and real-time inputs.",
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    desc: "Mastered complex joins, window functions, and subqueries to extract, aggregate, and manipulate multi-relational datasets.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Certifications</div>
          <h2 className={"font-display sectionTitle"}>Always leveling up</h2>
        </div>

        <div className={styles.grid}>
          {certs.map(function (cert) {
            return (
              <div key={cert.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <CertIcon />
                </div>
                <div>
                  <div className={"font-display " + styles.title}>{cert.title}</div>
                  <div className={styles.issuer}>{cert.issuer}</div>
                  <div className={styles.desc}>{cert.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
