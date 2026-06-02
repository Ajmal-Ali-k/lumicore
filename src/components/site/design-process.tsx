import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { designSteps, guarantees } from "@/lib/content";
import { Reveal } from "./reveal";

export function DesignProcess() {
  return (
    <section className="min-h-[1777px] bg-white px-6 py-20 text-[#111] sm:min-h-[954px] sm:px-8 lg:min-h-[754px] lg:px-16 lg:py-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/home/design-section-background-image.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative grid gap-12 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_1.35fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-white">
                Design Your Villa Interiors
                <br />
                <span className="text-primary">
                  Before Spending a Dirham
                </span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/74">
                Upload your villa floor plan and collaborate live with our
                designers to create a full 3D interior concept within an hour.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {guarantees.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 rounded-full bg-white/85 p-1 text-[#111]" />
                    <span className="font-semibold text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-primary px-6 py-4 text-lg font-medium text-white transition hover:bg-primary-hover"
              >
                Start Your 3D Interior Design
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {designSteps.map((step, index) => (
                <div
                  key={step.label}
                  className={
                    "rounded-[24px] border p-6 text-center backdrop-blur-sm " +
                    (index === 0
                      ? "border-primary bg-black/35 shadow-[0_0_0_1px_rgba(87,183,192,0.32)]"
                      : "border-white/15 bg-black/20")
                  }
                >
                  <div
                    className={
                      "mx-auto flex h-16 w-16 items-center justify-center rounded-full " +
                      (index === 0 ? "bg-primary" : "bg-primary/50")
                    }
                  >
                    <step.Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white/80">
                    {step.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
