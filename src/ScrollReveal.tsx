
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "#nosotros, #menu, #ubicacion"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "scroll-visible");
      });
    };
  }, []);

  return null;
}
