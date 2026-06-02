"use client";

import { Globe2, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/lib/content";
import { Logo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 shadow-[0_18px_42px_rgba(0,0,0,0.16)] backdrop-blur-xl">
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="#top"
          aria-label="Ideal Factory home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Logo className="h-9 w-auto" priority />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-3 text-sm font-semibold text-white/85 transition hover:border-primary/50 hover:text-primary"
          >
            <Globe2 className="h-4 w-4" />
            <span className="hidden sm:inline">العربية</span>
          </button>
          <Link
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-[#062f34] shadow-[0_10px_25px_rgba(87,183,192,0.2)] transition hover:bg-primary-hover sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Start Your Project
          </Link>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#0B0A09]/96 p-3 shadow-2xl backdrop-blur lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-[#062f34]"
          >
            <Phone className="h-4 w-4" />
            Start Your Project
          </Link>
        </div>
      ) : null}
    </header>
  );
}
