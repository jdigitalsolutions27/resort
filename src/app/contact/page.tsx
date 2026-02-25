import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page with validated form, operating hours, and responsive Google Map for Tacloban City.",
};

const contactCards = [
  {
    icon: PhoneCall,
    title: "Phone",
    detail: "+63 917 123 4567",
    note: "Call us for urgent booking assistance.",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "reservations@azurecove.demo",
    note: "Best for quotes and partnership inquiries.",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "Tacloban City, Leyte, Philippines",
    note: "Sample map location for this sales demo.",
  },
];

const operatingHours = [
  "Monday to Thursday: 8:00 AM - 8:00 PM",
  "Friday to Sunday: 7:00 AM - 10:00 PM",
  "Holiday support available for in-house guests",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="https://images.pexels.com/photos/32229384/pexels-photo-32229384.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1200&dpr=2"
          alt="Resort reception team"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#13363d]/65" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Contact</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Talk to the Resort Team</h1>
            <p className="mt-4 text-sm text-white/85 sm:text-base">
              Reach out for booking help, special requests, and collaboration opportunities.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((card, index) => (
              <MotionReveal key={card.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-line bg-card p-6 shadow-luxury">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e3eff0] text-accent-dark">
                    <card.icon size={20} />
                  </span>
                  <h2 className="mt-4 text-2xl text-accent-dark">{card.title}</h2>
                  <p className="mt-2 text-sm font-medium text-accent-dark">{card.detail}</p>
                  <p className="mt-2 text-sm text-muted">{card.note}</p>
                </article>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal className="mt-8 rounded-3xl border border-line bg-card p-6 shadow-luxury md:p-8">
            <h2 className="text-2xl text-accent-dark">Operating Hours</h2>
            <ul className="mt-4 space-y-2">
              {operatingHours.map((hours) => (
                <li key={hours} className="flex items-start gap-2 text-sm text-muted">
                  <Clock3 size={16} className="mt-1 shrink-0 text-accent" />
                  {hours}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-2 xl:items-start">
            <MotionReveal>
              <ContactForm />
            </MotionReveal>
            <MotionReveal>
              <MapEmbed title="Tacloban City sample resort map" />
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}



