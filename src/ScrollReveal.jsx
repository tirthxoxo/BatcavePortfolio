import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = document.querySelectorAll(
      ".section, .hero-visual"
    );

    const cards = document.querySelectorAll(
      ".premium-project-card, .skills-grid > *, .project-card"
    );

    const headings = document.querySelectorAll(
      ".section-heading, .premium-projects-heading"
    );

    const allTargets = new Set([
      ...sections,
      ...cards,
      ...headings,
    ]);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      allTargets.forEach((element) => {
        element.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          element.classList.add("reveal-visible");

          // Add a short scan pulse to section panels.
          if (element.classList.contains("section")) {
            element.classList.add("bat-scan-active");
          }

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    sections.forEach((element) => {
      element.classList.add("reveal-ready", "reveal-section");
      observer.observe(element);
    });

    headings.forEach((element) => {
      element.classList.add("reveal-ready", "reveal-heading");
      observer.observe(element);
    });

    cards.forEach((element, index) => {
      element.classList.add("reveal-ready", "reveal-card");
      element.style.setProperty(
        "--reveal-delay",
        `${(index % 3) * 140}ms`
      );
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}