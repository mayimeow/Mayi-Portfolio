import { Suspense } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectsSkeleton from "../components/ProjectsSkeleton";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Certifications />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
      </Reveal>
      <Reveal>
        <Resume />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <BackToTop />
    </>
  );
}
