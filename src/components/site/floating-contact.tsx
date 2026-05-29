import Image from "next/image";

export function FloatingContact() {
  return (
    <button
      type="button"
      aria-label="Talk to a designer now"
      className="group fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 text-left outline-none sm:bottom-6 sm:right-6 sm:gap-3"
    >
      <span className="relative block h-16 w-16 overflow-visible transition duration-300 group-hover:scale-105 sm:h-[76px] sm:w-[76px]">
        <span className="absolute inset-0 rounded-full bg-primary/15 blur-md" />
        <span className="absolute inset-1 rounded-full border-4 border-white bg-primary/15 shadow-[0_8px_35px_rgba(88,190,200,0.28)]" />
        <Image
          src="/images/home/support-agent.webp"
          alt=""
          width={80}
          height={80}
          className="absolute inset-2 rounded-full object-cover"
        />
        <Image
          src="/images/home/headphones-overlay.svg"
          alt=""
          width={126}
          height={126}
          className="pointer-events-none absolute left-1/2 -top-2.5 z-10 h-14 w-auto max-w-none -translate-x-1/2 select-none sm:h-16"
        />
      </span>
    </button>
  );
}
