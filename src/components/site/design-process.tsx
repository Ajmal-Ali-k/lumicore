import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { designSteps, guarantees } from "@/lib/content";
import { Reveal } from "./reveal";

export function DesignProcess() {
  return (
    <section className="bg-white px-5 pb-24 text-[#111] sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0E0E0E] px-6 py-10 text-white shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:px-10 lg:px-14">
          <Image
            src="/images/home/design-section-background-image.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-38"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">
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
                className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover sm:px-8"
              >
                Start Your 3D Interior Design
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {designSteps.map((step, index) => (
                <div
                  key={step.label}
                  className={`rounded-[24px] border p-6 text-center backdrop-blur-sm ${
                    index === 0
                      ? "border-primary bg-black/35 shadow-[0_0_0_1px_rgba(88,190,200,0.32)]"
                      : "border-white/15 bg-black/20"
                  }`}
                >
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                      index === 0 ? "bg-primary" : "bg-primary/50"
                    }`}
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
