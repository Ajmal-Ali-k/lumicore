import { Send } from "lucide-react";

import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate min-h-[1264px] overflow-hidden bg-[#0E0E0E] px-6 py-24 text-white sm:min-h-[1025px] sm:px-8 lg:min-h-[797px] lg:px-16"
    >
      <div className="absolute inset-0 soft-grid opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-[0.38em] text-primary">
            Get in touch
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
            Let&apos;s discuss your project!
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-white/68">
            Contact us today and learn more about how our interior fit out and
            custom manufacturing services can bring your ideas to life.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            We Love To Hear From You
          </h3>
          <form className="rounded-lg border border-white/10 bg-transparent">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <h4 className="text-xl font-bold">Get in Touch</h4>
              <p className="mt-1 text-sm text-white/80">
                Tell us about your villa. We&apos;ll be in touch within one
                working day.
              </p>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              <input className="field" placeholder="First Name" />
              <input className="field" placeholder="Last Name" />
              <input className="field" placeholder="Phone No (optional)" />
              <input className="field" type="email" placeholder="Email" />
              <textarea
                className="field min-h-32 sm:col-span-2"
                placeholder="Type your message here...."
              />
              <button
                type="button"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary-hover sm:col-span-2"
              >
                <Send className="h-4 w-4" />
                Submit
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
