import styles from "./ProjectsSkeleton.module.css";

export default function ProjectsSkeleton() {
  var cards = [1, 2, 3, 4];
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Projects</div>
          <h2 className={"font-display sectionTitle"}>What I have built</h2>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tabPulse}></div>
          <div className={styles.tabPulse}></div>
          <div className={styles.tabPulse}></div>
        </div>

        <div className={styles.grid}>
          {cards.map(function (i) {
            return (
              <div key={i} className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.body}>
                  <div className={styles.line} style={{ width: "40%" }}></div>
                  <div className={styles.line} style={{ width: "80%" }}></div>
                  <div className={styles.line} style={{ width: "100%" }}></div>
                  <div className={styles.line} style={{ width: "60%" }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
