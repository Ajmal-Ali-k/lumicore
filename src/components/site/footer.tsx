import { Globe, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/lib/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0A0A0A] text-white">
      <Image
        src="/images/home/kitchen-product-image.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo className="h-9 w-auto" />
            <p className="max-w-xs text-sm leading-7 text-white/60">
              Our kitchens may not be able to whisk you away to sun kissed
              foreign shores, but our collection boasts all the quality
              craftsmanship and style..
            </p>
          </div>

          <FooterList title="Quick Links" items={footerLinks.quick} />
          <FooterList title="Explore" items={footerLinks.explore} />

          <div>
            <h4 className="mb-5 text-base font-bold uppercase tracking-wider text-primary">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <FooterContact icon={<Globe />} text="idealhomeuae.com" />
              <FooterContact
                icon={<MapPin />}
                text="ICAD I, Abu Dhabi Industrial City"
              />
              <FooterContact icon={<Navigation />} text="GPS  8GG4+W8F" />
              <FooterContact icon={<Mail />} text="info@idealhomeuae.com" />
              <FooterContact icon={<Phone />} text="+971 50 312 2300" />
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>Copyright &copy;2026 lumicore all rights reserved</p>
          <div className="flex gap-6">
            <Link href="#top" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <Link href="#top" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-5 text-base font-bold uppercase tracking-wider text-primary">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-white/75">
        {items.map((item) => (
          <li key={item}>
            <Link href="#top" className="transition-colors hover:text-primary">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact({
  icon,
  text,
}: {
  icon: React.ReactElement;
  text: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-primary [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
