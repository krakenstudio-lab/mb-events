"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Portfolio.module.css";

type Project = {
  id: number;
  title: string;
  category: "Concerti" | "Corporate" | "Matrimoni" | "Privati";
  year: string;
  image: string;
};

export default function Portfolio() {
  const categories = ["Tutti", "Concerti", "Corporate", "Matrimoni", "Privati"] as const;
  type CategoryFilter = typeof categories[number];
  
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Tutti");

  const projects: Project[] = [
    {
      id: 1,
      title: "Summer Music Festival",
      category: "Concerti",
      year: "2022",
      image: "/images/stage_lights.png",
    },
    {
      id: 2,
      title: "Lancio Prodotto Automotive",
      category: "Corporate",
      year: "2023",
      image: "/images/corporate_event.png",
    },
    {
      id: 3,
      title: "Gala di Beneficenza",
      category: "Privati",
      year: "2023",
      image: "/images/audio_console.png",
    },
    {
      id: 4,
      title: "Arena Tour Nazionale",
      category: "Concerti",
      year: "2022",
      image: "/images/truss_structure.png",
    },
    {
      id: 5,
      title: "Matrimonio Castello Sforzesco",
      category: "Matrimoni",
      year: "2023",
      image: "/images/wedding_venue.png",
    },
  ];

  const filteredProjects = activeFilter === "Tutti" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className={styles.portfolioHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Il Nostro <span className={styles.titleGradient}>Portfolio</span>
            </h1>
            <p className={styles.heroText}>
              Una selezione dei nostri progetti più significativi. Ogni evento racconta una storia di passione, tecnologia e dedizione al dettaglio.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className={`${styles.projectsSection} section-padding`}>
        <div className="container">
          {/* Category tabs */}
          <div className={styles.filtersContainer}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeFilter === cat ? styles.activeFilterBtn : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <Image
                  src={project.image}
                  alt={`${project.title} - evento ${project.category.toLowerCase()} con service MB Events`}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
