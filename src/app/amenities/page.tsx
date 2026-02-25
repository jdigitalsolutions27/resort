import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { amenityGalleryImages, amenities, resortRules } from "@/data/amenities";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "View resort amenities, property rules, and full gallery visuals to help guests decide faster.",
};

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="https://images.pexels.com/photos/35796762/pexels-photo-35796762.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1200&dpr=2"
          alt="Resort amenities overview"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#12353c]/65" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Amenities</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Everything Guests Need for a Complete Stay</h1>
            <p className="mt-4 text-sm text-white/85 sm:text-base">
              Highlighting amenities clearly helps guests book with confidence before asking more
              questions.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">Amenity Highlights</h2>
          </MotionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map((amenity, index) => (
              <MotionReveal key={amenity.id} delay={index * 0.04}>
                <AmenityCard amenity={amenity} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="rounded-3xl border border-line bg-card p-6 shadow-luxury md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl text-accent-dark">Resort Rules & Guest Information</h2>
                <p className="mt-3 text-sm text-muted">
                  Clear policies reduce confusion and support faster booking decisions.
                </p>
              </div>
              <ul className="space-y-3">
                {resortRules.map((rule) => (
                  <li key={rule} className="flex gap-2 text-sm text-muted">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/booking"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Reserve Through Inquiry
            </Link>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">Full Gallery</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              A richer gallery helps future guests imagine their own stay.
            </p>
          </MotionReveal>
          <div className="mt-8">
            <GalleryGrid items={amenityGalleryImages} columns="four" />
          </div>
        </div>
      </section>

      <CTASection
        title="Let guests see your full value before they ask"
        description="A polished amenities page builds trust and reduces inquiry friction, especially for mobile visitors."
        primaryCta={{ label: "Book a Stay", href: "/booking" }}
        secondaryCta={{ label: "Contact Resort", href: "/contact" }}
      />
    </>
  );
}



