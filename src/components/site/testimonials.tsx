import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

import { testimonials } from "@/lib/content";
import { Reveal } from "./reveal";

export function Testimonials() {
  return (
    <section className="bg-[#1B1B1B] px-5 py-20 text-white sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.38em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
            What They&apos;re Talking About Company ?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Real villa owners across the UAE have trusted Ideal Factory for
            kitchens, closets, doors and uPVC window systems.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover"
            aria-label="Start a project"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <article className="flex h-full flex-col rounded-2xl bg-[#1B1B1B] p-7 shadow-[0_0_18px_rgba(255,255,255,0.16)]">
                <Quote className="h-10 w-10 text-primary" />
                <p className="mt-6 flex-1 text-sm font-medium leading-7 text-white/78">
                  {testimonial.quote}
                </p>
                <div className="mt-8">
                  <h3 className="font-bold text-primary">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-white/45">Customer</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
