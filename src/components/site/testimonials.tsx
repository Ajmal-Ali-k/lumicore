"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

import { testimonials } from "@/lib/content";
import { Reveal } from "./reveal";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const maxIndex = Math.max(testimonials.length - 2, 0);

  const previous = () => {
    setActive((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const next = () => {
    setActive((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section
      id="testimonials"
      className="min-h-[782px] overflow-hidden bg-[#1e1e1e] px-6 py-20 text-white sm:min-h-[730px] sm:px-8 lg:min-h-[459px] lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.38em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
            What They&apos;re Talking About Company ?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            Real villa owners across the UAE have trusted Ideal Factory for
            kitchens, closets, doors and uPVC window systems.
          </p>
          <div className="mt-7 flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={120} className="overflow-visible lg:-mr-[360px]">
          <div className="overflow-hidden lg:overflow-visible">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: "translateX(-" + active * 354 + "px)" }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="relative flex h-[267px] w-[min(338px,80vw)] shrink-0 flex-col rounded-2xl p-7 shadow-[0px_0px_12px_rgba(255,255,255,0.2)]"
                >
                  <Quote className="h-9 w-9 text-primary" />
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-white/80">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-base font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-white/55">
                      Customer
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
