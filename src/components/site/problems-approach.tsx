import { Check, Play } from "lucide-react";
import Image from "next/image";

import { approach, problems } from "@/lib/content";
import { Reveal } from "./reveal";

export function ProblemsApproach() {
  return (
    <section
      id="approach"
      className="min-h-[2338px] bg-white px-6 py-20 text-white sm:min-h-[1738px] sm:px-8 lg:min-h-[1702px] lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#231f20] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <Reveal className="max-w-4xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Why Villa Interior Projects Often Become Difficult?
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-white/80">
            When interior systems are sourced from multiple suppliers, the
            process becomes fragmented, making it difficult to coordinate a
            consistent final result. The lack of commitment leads to:
          </p>
          <div className="mt-7 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 rounded-full bg-primary p-1 text-white" />
                <p className="text-lg font-semibold leading-7 text-white">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0E0E0E] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-video">
              <Image
                src="/images/home/design-section-background-image.webp"
                alt="Kitchen interior preview"
                fill
                sizes="(max-width: 1024px) 100vw, 72rem"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play project preview"
                  className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-transparent text-white transition hover:scale-105 lg:h-36 lg:w-36"
                >
                  <Play className="ml-1 h-10 w-10 fill-current lg:h-14 lg:w-14" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-0">
          <div className="lg:pe-10">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              The Ideal Factory
              <br />
              Approach
            </h2>
          </div>
          <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {approach.map((item) => (
              <article key={item.title}>
                <item.Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-6 text-lg font-semibold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
