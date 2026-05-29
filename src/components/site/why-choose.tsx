import { Check, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { whyChoose } from "@/lib/content";
import { Reveal } from "./reveal";

export function WhyChoose() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16">
      <Reveal className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-[22px] bg-primary text-white shadow-[0_20px_60px_rgba(88,190,200,0.28)] lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <Image
              src="/images/home/why-villa-owners.webp"
              alt="Why Villa Owners"
              fill
              sizes="(max-width: 1024px) 100vw, 32rem"
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>
          <div className="px-8 pb-10 pt-2 sm:px-12 lg:p-12">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Why Villa Owners
              <br />
              Choose Ideal Factory
            </h2>
            <ul className="mt-7 space-y-4">
              {whyChoose.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-medium sm:text-base"
                >
                  <Check className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-white/25 p-1 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white/90 px-6 text-sm font-bold text-primary transition hover:bg-white hover:text-primary-hover"
            >
              <Phone className="h-4 w-4" />
              Start Your Free 3D Design
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
