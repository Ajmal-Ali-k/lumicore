import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { workImages } from "@/lib/content";
import { Reveal } from "./reveal";

export function WorkGallery() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-[#0E0E0E] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 soft-grid opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/60" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.38em] text-primary">
            Our Work
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
            Designed. Built. Delivered
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4 lg:auto-rows-[250px]">
          {workImages.map((image, index) => (
            <Reveal
              key={`${image.src}-${index}`}
              delay={index * 55}
              className={`relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-hover"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
