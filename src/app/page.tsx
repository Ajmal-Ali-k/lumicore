import { ContactSection } from "@/components/site/contact-section";
import { DesignProcess } from "@/components/site/design-process";
import { FloatingContact } from "@/components/site/floating-contact";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { ProblemsApproach } from "@/components/site/problems-approach";
import { SolutionsSticky } from "@/components/site/solutions-sticky";
import { Testimonials } from "@/components/site/testimonials";
import { WhyChoose } from "@/components/site/why-choose";
import { WorkGallery } from "@/components/site/work-gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Navbar />
      <main>
        <Hero />
        <SolutionsSticky />
        <ProblemsApproach />
        <DesignProcess />
        <WorkGallery />
        <WhyChoose />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
