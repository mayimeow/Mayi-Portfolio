"use client";

import { useState, ReactNode } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

// 1. Define the types for your project objects and props
interface Project {
  id: string | number;
  category: string;
  title: string;
  is_placeholder?: boolean;
  tags?: string;
  image_url?: string;
  description?: string;
  coming_soon?: boolean;
  metric?: string;
  live_url?: string;
  repo_url?: string;
}

interface ProjectsClientProps {
  projects?: Project[];
  error?: string | null;
}

const categories = ["All", "Excel", "Vercel Systems", "Apps", "Data Studio", "Power BI"];

// 2. Add Record types to dictionaries to fix the indexing errors
const categoryColors: Record<string, { bg: string; fg: string }> = {
  "Excel": { bg: "var(--pink-pale)", fg: "var(--pink-deep)" },
  "Vercel Systems": { bg: "var(--lav-pale)", fg: "var(--lav)" },
  "Apps": { bg: "#FFF3DC", fg: "#9A6A1F" },
  "Data Studio": { bg: "var(--lav-pale)", fg: "var(--lav)" },
  "Power BI": { bg: "var(--pink-pale)", fg: "var(--pink-deep)" },
};

function GridIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    </svg>
  );
}

function TriangleIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 22 20H2Z"></path>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2"></rect>
      <line x1="10" y1="19" x2="14" y2="19"></line>
    </svg>
  );
}

function BarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

const categoryIcons: Record<string, ReactNode> = {
  "Excel": <GridIcon />,
  "Vercel Systems": <TriangleIcon />,
  "Apps": <PhoneIcon />,
  "Data Studio": <BarIcon />,
  "Power BI": <BarIcon />,
};

// 3. Type the component props
export default function ProjectsClient(props: ProjectsClientProps) {
  const projects = props.projects || [];
  const error = props.error;

  const [active, setActive] = useState<string>("All");

  // 4. Type the mapping/filtering parameters
  const visible = active === "All" ? projects : projects.filter(function (p: Project) {
    return p.category === active;
  });

  return (
    <section id="projects" className={styles.section}>
      <div className="wrap">
        <div className={styles.header}>
          <div className="sectionTag">Projects</div>
          <h2 className={"font-display sectionTitle"}>What I have built</h2>
        </div>

        {error && <p>Could not load projects: {error}</p>}

        <div className={styles.tabs}>
          {categories.map(function (cat: string) {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={function () { setActive(cat); }}
                className={styles.tab + (isActive ? " " + styles.tabActive : "")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className={styles.grid}>
          {visible.map(function (p: Project) {
            const colors = categoryColors[p.category] || { bg: "var(--pink-pale)", fg: "var(--pink-deep)" };
            const isPlaceholder = !!p.is_placeholder;
            const cardClass = styles.card + (isPlaceholder ? " " + styles.cardPlaceholder : "");
            const tagList = p.tags ? p.tags.split(",").map(function (t: string) { return t.trim(); }) : [];

            return (
              <div key={p.id} className={cardClass}>
                {!isPlaceholder && (
                  <div className={styles.previewWrap}>
                    {p.image_url ? (
                      <Image
                        src={p.image_url}
                        alt={p.title}
                        fill
                        className={styles.previewImg}
                        sizes="(max-width: 760px) 100vw, 50vw"
                      />
                    ) : (
                      <div
                        className={styles.previewFallback}
                        style={{ background: colors.bg, color: colors.fg }}
                      >
                        {categoryIcons[p.category]}
                      </div>
                    )}
                  </div>
                )}
                <div className={styles.body}>
                  <div className={styles.topRow}>
                    <div
                      className={styles.catBadge}
                      style={{ background: colors.bg, color: colors.fg }}
                    >
                      {p.category}
                    </div>
                  </div>
                  <div className={"font-display " + styles.title + (isPlaceholder ? " " + styles.titlePlaceholder : "")}>
                    {p.title}
                  </div>
                  {p.description && <div className={styles.desc}>{p.description}</div>}
                  {tagList.length > 0 && (
                    <div className={styles.tags}>
                      {tagList.map(function (t: string) {
                        return <span key={t} className={styles.tag}>{t}</span>;
                      })}
                    </div>
                  )}
                  {p.coming_soon && (
                    <div className={styles.comingSoon}>
                      <span className={styles.dot}></span>
                      In progress
                    </div>
                  )}
                  {p.metric && !p.coming_soon && <div className={styles.metric}>{p.metric}</div>}
                  {(p.live_url || p.repo_url) && (
                    <div className={styles.links}>
                      {p.live_url && <a href={p.live_url} target="_blank" rel="noreferrer">Live site</a>}
                      {p.repo_url && <a href={p.repo_url} target="_blank" rel="noreferrer">Repo</a>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}