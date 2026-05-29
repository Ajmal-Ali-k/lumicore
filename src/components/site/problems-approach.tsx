import { Check, Play } from "lucide-react";
import Image from "next/image";

import { approach, problems } from "@/lib/content";
import { Reveal } from "./reveal";

export function ProblemsApproach() {
  return (
    <section
      id="approach"
      className="bg-white px-5 py-20 text-[#111] sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Why Villa Interior Projects Often Become Difficult?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
              When interior systems are sourced from multiple suppliers, the
              process becomes fragmented, making it difficult to coordinate a
              consistent final result. The lack of commitment leads to:
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 rounded-full bg-[#231F20] px-5 py-4 text-sm font-bold text-white shadow-lg"
                >
                  <Check className="h-4 w-4 rounded-full bg-primary p-0.5 text-white" />
                  {problem}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl bg-[#231F20] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-video">
                <Image
                  src="/images/home/design-section-background-image.webp"
                  alt="Kitchen interior preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48rem"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play project preview"
                    className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/40 bg-white/10 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/20"
                  >
                    <Play className="ml-1 h-10 w-10 fill-current" />
                  </button>
                </div>
              </div>
              <div className="grid gap-px bg-white/10 p-px sm:grid-cols-2">
                {approach.map((item) => (
                  <div key={item.title} className="bg-[#231F20] p-7 text-white">
                    <item.Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-6 text-base font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
