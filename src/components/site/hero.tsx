import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-[#0E0E0E]"
    >
      <Image
        src="/images/home/parallax-effect-background-image.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-section-loop-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/50 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl items-center justify-center px-5 pt-24 text-center sm:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <h1 className="font-lexend text-balance text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-[3.6rem]">
            Design &amp; Delivery of
            <br />
            <span className="text-primary">
              Your Villa Interiors Made Simple
            </span>
          </h1>
          <p className="font-lexend mx-auto mt-5 max-w-5xl text-pretty text-sm font-normal leading-[1.625] text-white sm:text-base">
            Kitchens, closets, doors, and premium uPVC windows designed,
            manufactured, and installed by one trusted Emirati factory.
          </p>
          <Link
            href="#contact"
            className="font-lexend mt-7 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#0E0E0E] shadow-2xl transition hover:bg-primary hover:text-white sm:px-8"
          >
            Get Your FREE 3D Design Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
