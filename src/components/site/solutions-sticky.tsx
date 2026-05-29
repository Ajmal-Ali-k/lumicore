"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { services } from "@/lib/content";

export function SolutionsSticky() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const maskTextRef = useRef<SVGGElement>(null);
  const outlineTextRef = useRef<SVGGElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const overlay = overlayRef.current;
    const textLayer = textLayerRef.current;
    const maskText = maskTextRef.current;
    const outlineText = outlineTextRef.current;
    const intro = introRef.current;
    const cards = cardsRef.current;

    if (
      !section ||
      !pin ||
      !overlay ||
      !textLayer ||
      !maskText ||
      !outlineText ||
      !intro ||
      !cards
    ) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    async function setupScrollTimeline() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      let matchMedia: ReturnType<typeof gsap.matchMedia> | undefined;
      let refreshFrame = 0;

      const context = gsap.context(() => {
        matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width: 1024px)", () => {
          const cardItems = gsap.utils.toArray<HTMLElement>(
            cards!.querySelectorAll("[data-service-card]"),
          );

          gsap.set(overlay, { opacity: 0 });
          gsap.set(textLayer, {
            autoAlpha: 1,
          });
          gsap.set([maskText, outlineText], {
            scale: 0.65,
            svgOrigin: "720 450",
            transformOrigin: "50% 50%",
          });
          gsap.set(maskText, { autoAlpha: 0 });
          gsap.set(outlineText, { autoAlpha: 1 });
          gsap.set(intro, {
            autoAlpha: 0,
            y: 24,
            scale: 0.98,
          });
          gsap.set(cards, {
            autoAlpha: 0,
            y: 72,
            scale: 0.985,
            pointerEvents: "none",
          });
          gsap.set(cardItems, { autoAlpha: 0, y: 44 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section!,
              start: "top top",
              end: () => "+=" + Math.max(window.innerHeight * 4.25, 3200),
              scrub: 0.9,
              pin: pin!,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(maskText, { autoAlpha: 1, duration: 0.16 }, 0.08)
            .to([maskText, outlineText], { scale: 1.58, duration: 0.38 }, 0.26)
            .to([maskText, outlineText], { scale: 5.2, duration: 0.52 }, 0.68)
            .to(overlay, { opacity: 0.28, duration: 0.28 }, 0.84)
            .to([maskText, outlineText], { autoAlpha: 0, duration: 0.24 }, 1.12)
            .to(textLayer, { autoAlpha: 0, duration: 0.16 }, 1.24)
            .to(
              intro,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.18,
                ease: "power2.out",
              },
              1.38,
            )
            .to(overlay, { opacity: 0.58, duration: 0.18 }, 1.4)
            .to(intro, { autoAlpha: 0, y: -24, duration: 0.16 }, 1.78)
            .to(
              cards,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                pointerEvents: "auto",
                duration: 0.16,
                ease: "power2.out",
              },
              1.98,
            )
            .to(
              cardItems,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.2,
                stagger: 0.035,
                ease: "power2.out",
              },
              2.04,
            );

          return () => {
            timeline.kill();
            gsap.set(
              [
                overlay,
                intro,
                textLayer,
                maskText,
                outlineText,
                cards,
                ...cardItems,
              ],
              {
                clearProps: "all",
              },
            );
          };
        });

        matchMedia.add("(max-width: 1023px)", () => {
          const cardItems = Array.from(
            cards!.querySelectorAll("[data-service-card]"),
          );

          gsap.set(overlay, { opacity: 0.34 });
          gsap.set([intro, textLayer, maskText, outlineText, cards, ...cardItems], {
            clearProps: "all",
          });

          return () => {};
        });
      }, section!);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      refreshFrame = window.requestAnimationFrame(refresh);

      cleanup = () => {
        window.cancelAnimationFrame(refreshFrame);
        window.removeEventListener("load", refresh);
        matchMedia?.revert();
        context.revert();
      };
    }

    void setupScrollTimeline();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="relative bg-[#0A0A0A]">
      <div ref={pinRef} className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/parallax-effect-background-image.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          ref={overlayRef}
          data-solutions-overlay
          className="absolute inset-0 bg-black"
          style={{ opacity: 0 }}
        />

        <div
          ref={textLayerRef}
          data-solutions-text
          className="pointer-events-none absolute inset-0 hidden will-change-transform lg:block"
          style={{ opacity: 1, visibility: "visible" }}
        >
          <svg
            data-solutions-foreground
            className="absolute inset-x-0 top-0 z-10 h-dvh w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <mask
                id="solutions-foreground-cutout-mask"
                maskUnits="userSpaceOnUse"
                maskContentUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1440"
                height="900"
              >
                <rect x="0" y="0" width="1440" height="900" fill="white" />
                <g
                  ref={maskTextRef}
                  data-solutions-mask-text
                  transform="translate(252 157.5) scale(0.65)"
                  style={{ opacity: 0, visibility: "hidden" }}
                >
                  <GiantSolutionsText fill="black" />
                </g>
              </mask>
            </defs>
            <image
              href="/images/home/parallax-foreground.webp"
              x="0"
              y="0"
              width="1440"
              height="900"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#solutions-foreground-cutout-mask)"
            />
          </svg>
          <svg
            data-solutions-outline
            className="absolute inset-x-0 top-0 z-20 h-dvh w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g
              ref={outlineTextRef}
              data-solutions-outline-text
              transform="translate(252 157.5) scale(0.65)"
            >
              <GiantSolutionsText
                fill="transparent"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth={3}
              />
            </g>
          </svg>
        </div>

        <div
          ref={introRef}
          data-solutions-intro
          className="pointer-events-none absolute inset-0 hidden items-center justify-center px-6 text-center lg:flex"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <div className="flex flex-col items-center gap-7 drop-shadow-2xl">
            <Image
              src="/images/ideal-factory-icon.png"
              alt="Ideal Factory Icon"
              width={96}
              height={108}
              className="h-[clamp(60px,8vh,100px)] w-auto object-contain"
            />
            <h2 className="text-[clamp(2.2rem,3.5vw,3.5rem)] font-bold leading-tight text-white">
              Our Solutions
            </h2>
            <p className="max-w-4xl text-[clamp(1rem,2vw,2rem)] font-semibold leading-snug text-white">
              We provide all types of integrated
              <br />
              <span className="text-primary">
                KITCHEN, CLOSET, DOOR Services
              </span>
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto mb-8 max-w-5xl text-center lg:hidden">
            <Image
              src="/images/ideal-factory-icon.png"
              alt=""
              width={96}
              height={108}
              className="mx-auto h-16 w-auto object-contain"
            />
            <h2 className="mt-5 text-4xl font-bold text-white">Our Solutions</h2>
            <p className="mt-3 text-xl font-semibold leading-snug">
              We provide all types of integrated
              <br />
              <span className="text-primary">
                KITCHEN, CLOSET, DOOR Services
              </span>
            </p>
          </div>

          <div className="lg:hidden">
            <ServiceGrid />
          </div>

          <div
            ref={cardsRef}
            data-solutions-cards
            className="hidden will-change-transform lg:block lg:opacity-0"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <ServiceGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

function GiantSolutionsText({
  fill,
  stroke,
  strokeWidth,
}: {
  fill: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <>
      {[
        ["OUR", 270],
        ["INTERIOR", 450],
        ["SOLUTIONS", 630],
      ].map(([word, y]) => (
        <text
          key={word}
          x="720"
          y={y}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          paintOrder="stroke"
          fontFamily="var(--font-bebas), Impact, sans-serif"
          fontSize="190"
          fontWeight="400"
          letterSpacing="0.02em"
          textAnchor="middle"
        >
          {word}
        </text>
      ))}
    </>
  );
}

function ServiceGrid() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            data-service-card
            className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.86)] shadow-2xl backdrop-blur-[2px]"
          >
            <div className="relative h-[clamp(200px,27vh,265px)] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <div className="flex min-h-24 items-center gap-4 px-5 py-4 sm:px-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white text-primary">
                <service.Icon className="h-7 w-7" strokeWidth={1.7} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href}
                aria-label={"Learn more about " + service.title}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary text-white transition group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgba(88,190,200,0.4)]"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-7 text-center">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-hover"
        >
          Explore Our Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
