import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-8 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/ideal-factory-logo.png"
      alt="Ideal Factory"
      width={188}
      height={72}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
