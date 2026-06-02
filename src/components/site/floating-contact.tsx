import Image from "next/image";

export function FloatingContact() {
  return (
    <button
      type="button"
      aria-label="Talk to a designer now"
      className="group fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 text-left outline-none sm:bottom-6 sm:right-6 sm:gap-3"
    >
      <span className="relative block h-16 w-16 overflow-visible transition duration-300 group-hover:scale-105">
        <span className="absolute bottom-1 left-1/2 h-16 w-16 -translate-x-1/2 animate-ping rounded-full bg-primary/40" />
        <span className="absolute bottom-1 left-1/2 h-16 w-16 -translate-x-1/2 overflow-hidden rounded-full border-2 border-primary bg-white shadow-2xl transition duration-300 group-hover:border-white">
          <Image
            src="/images/home/support-agent.webp"
            alt=""
            fill
            sizes="64px"
            className="object-cover object-center"
          />
        </span>
        <Image
          src="/images/home/headphones-overlay.svg"
          alt=""
          width={126}
          height={80}
          className="pointer-events-none absolute left-1/2 -top-2.5 z-10 h-14 w-auto max-w-none -translate-x-1/2 select-none"
        />
      </span>
    </button>
  );
}
