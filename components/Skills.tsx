import styles from "./Skills.module.css";

var groups = [
  {
    label: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "Dart", "C++", "R", "C", "SQL", "Google Apps Script", "HTML/CSS"],
  },
  {
    label: "Framework / Library",
    items: ["Next.js", "React", "Vue.js", "Node.js", "Flask", "FastAPI", "Flutter", "Tailwind CSS", "Matplotlib", "Seaborn", "Plotly", "Recharts"],
  },
  {
    label: "Tools & Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Firebase", "Supabase", "Redis", "Vercel", "Git/GitHub", "Power BI", "Google Looker Studio", "Microsoft 365", "XAMPP"],
  },
  {
    label: "Design",
    items: ["Figma", "Lucidchart", "Canva"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Skills</div>
          <h2 className={"font-display sectionTitle"}>What I work with</h2>
        </div>

        <div className={styles.groups}>
          {groups.map(function (group) {
            return (
              <div key={group.label} className={styles.group}>
                <div className={styles.groupLabel}>{group.label}</div>
                <div className={styles.chips}>
                  {group.items.map(function (item) {
                    return <span key={item} className={styles.chip}>{item}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
