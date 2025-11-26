"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Itinerary from "@/components/Itinerary";
import AddOns from "@/components/AddOns";
import LeadFormModal from "@/components/LeadFormModal";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [openLead, setOpenLead] = useState(false);

  return (
    <div className="bg-white text-zinc-900">
      <Navbar onCta={() => setOpenLead(true)} />
      <Hero onCta={() => setOpenLead(true)} />
      <Reveal>
        <Featured onCta={() => setOpenLead(true)} />
      </Reveal>
      <Reveal>
        <section id="packages" className="container mx-auto px-4">
          <Packages onCta={() => setOpenLead(true)} />
        </section>
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Itinerary />
      </Reveal>
      <Reveal>
        <AddOns />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Footer />
      <LeadFormModal open={openLead} onClose={() => setOpenLead(false)} />
    </div>
  );
}
