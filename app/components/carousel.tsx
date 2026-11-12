'use client';
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./projectCard";

const AUTO_ADVANCE_MS = 5000;

function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = projects.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Auto-scroll carousel, pauses on focus
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  // Keyboard navigation
  const regionRef = useRef<HTMLDivElement>(null);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (count === 0) return null;

  return (
    <div
      ref={regionRef}
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="w-full shrink-0 px-1"
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              <div className="min-h-[18rem]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-white transition hover:bg-zinc-900"
          >
            &#8592;
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Choose project">
            {projects.map((project, i) => (
              <button
                key={project.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${project.title}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-white transition hover:bg-zinc-900"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
