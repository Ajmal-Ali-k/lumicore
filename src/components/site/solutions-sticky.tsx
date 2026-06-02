"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { services } from "@/lib/content";

export function SolutionsSticky() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundSvgRef = useRef<SVGSVGElement>(null);
  const maskTextRef = useRef<SVGGElement>(null);
  const outlineTextRef = useRef<SVGGElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsHeaderIconRef = useRef<HTMLDivElement>(null);
  const cardsHeaderTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const background = backgroundRef.current;
    const foregroundSvg = foregroundSvgRef.current;
    const maskText = maskTextRef.current;
    const outlineText = outlineTextRef.current;
    const intro = introRef.current;
    const cards = cardsRef.current;
    const cardsHeaderIcon = cardsHeaderIconRef.current;
    const cardsHeaderText = cardsHeaderTextRef.current;

    if (
      !section ||
      !pin ||
      !background ||
      !foregroundSvg ||
      !maskText ||
      !outlineText ||
      !intro ||
      !cards ||
      !cardsHeaderIcon ||
      !cardsHeaderText
    ) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    async function setupScrollTimeline() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/dist/ScrollTrigger"),
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      let refreshFrame = 0;

      const context = gsap.context(() => {
        const cardItems = gsap.utils.toArray<HTMLElement>(
          cards!.querySelectorAll("[data-service-card]"),
        );

        gsap.set(background, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        gsap.set(foregroundSvg, { opacity: 1 });
        gsap.set([maskText, outlineText], {
          scale: 0.65,
          svgOrigin: "720 450",
          transformOrigin: "50% 50%",
        });
        gsap.set(maskText, { autoAlpha: 0 });
        gsap.set(outlineText, { autoAlpha: 1 });
        gsap.set(intro, { autoAlpha: 0, y: 0 });
        gsap.set(cards, { autoAlpha: 0, pointerEvents: "none" });
        gsap.set(cardsHeaderIcon, { autoAlpha: 0, y: -8 });
        gsap.set(cardsHeaderText, { autoAlpha: 0, y: 44 });
        gsap.set(cardItems, { autoAlpha: 0, y: 80, scale: 0.93 });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + window.innerHeight * 3.6,
            scrub: 0.9,
            pin,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(maskText, { autoAlpha: 1, duration: 0.08 }, 0.04)
          .to([maskText, outlineText], { scale: 1.58, duration: 0.24 }, 0.08)
          .to([maskText, outlineText], { scale: 5.2, duration: 0.48 }, 0.34)
          .to(foregroundSvg, { opacity: 0, duration: 0.19 }, 0.43)
          .to([maskText, outlineText], { autoAlpha: 0, duration: 0.13 }, 0.46)
          .to(
            intro,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.12,
              ease: "power2.out",
            },
            0.57,
          )
          .to(intro, { autoAlpha: 0, y: -24, duration: 0.08 }, 0.78)
          .to(
            cards,
            {
              autoAlpha: 1,
              pointerEvents: "auto",
              duration: 0.04,
              ease: "power2.out",
            },
            0.8,
          )
          .to(cardsHeaderIcon, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.81)
          .to(cardsHeaderText, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.8)
          .to(
            cardItems,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.08,
              stagger: 0.018,
              ease: "power2.out",
            },
            0.86,
          );
      }, section!);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      refreshFrame = window.requestAnimationFrame(refresh);

      cleanup = () => {
        window.cancelAnimationFrame(refreshFrame);
        window.removeEventListener("load", refresh);
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
    <section
      id="solutions"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-x-clip bg-[#0A0A0A]"
    >
      <div
        ref={pinRef}
        className="relative min-h-[2112px] overflow-hidden lg:min-h-screen"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={backgroundRef}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/home/parallax-effect-background-image.webp')",
            }}
          />
          <svg
            ref={foregroundSvgRef}
            data-solutions-foreground
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-dvh w-full"
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
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-dvh w-full"
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

          <div
            ref={introRef}
            data-solutions-intro
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <div className="flex flex-col items-center justify-center gap-[30px] drop-shadow-2xl">
              <Image
                src="/images/ideal-factory-icon.png"
                alt="Ideal Factory Icon"
                width={96}
                height={108}
                className="h-[clamp(60px,8vh,100px)] w-auto object-contain"
              />
              <h2 className="font-lexend text-[clamp(2.2rem,3.5vw,3.5rem)] font-bold leading-[1.2] text-white">
                Our Solutions
              </h2>
              <p className="font-lexend max-w-[900px] text-[clamp(1rem,2vw,2rem)] font-semibold leading-[1.3] text-white">
                We provide all types of integrated
                <br />
                <span className="text-primary">
                  KITCHEN, CLOSET, DOOR Services
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          data-solutions-cards
          className="relative z-40 min-h-screen w-full"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50" />
          <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,3.2vw,2.875rem)] pb-8 pt-12 sm:pt-14">
            <div className="mx-auto mb-8 max-w-[1114px] text-center">
              <div ref={cardsHeaderIconRef} className="mb-5 flex justify-center">
                <Image
                  src="/images/ideal-factory-icon.png"
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={108}
                  className="h-[clamp(48px,6vh,72px)] w-auto object-contain"
                />
              </div>
              <div ref={cardsHeaderTextRef}>
                <h2 className="font-lexend text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.2] text-white">
                  Our Solutions
                </h2>
                <p className="font-lexend mt-3 text-[clamp(1.1rem,2.3vw,2rem)] font-semibold leading-[1.3] text-white">
                  We provide all types of integrated
                  <br />
                  <span className="text-primary">
                    KITCHEN, CLOSET, DOOR Services
                  </span>
                </p>
              </div>
            </div>
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
            className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-[2px]"
          >
            <div className="relative h-[clamp(220px,32vh,380px)] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white text-primary">
                <service.Icon className="h-[34px] w-[34px]" strokeWidth={1.7} />
              </div>
            </div>
            <div className="flex w-full flex-1 flex-row items-center justify-between gap-4 px-5 py-5">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold leading-[1.3] text-white">
                  {service.title}
                </h3>
                <p className="text-base leading-[1.5] text-white/90">
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
      <div className="mt-8 text-center">
        <Link
          href="#work"
          className="inline-flex h-[52px] min-w-[236px] items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-base font-medium text-white transition hover:bg-primary-hover hover:shadow-[0_0_24px_rgb(var(--primary)_/_0.35)]"
        >
          Explore Our Projects
          <ArrowRight className="h-[18px] w-[18px]" />
        </Link>
      </div>
    </>
  );
}
