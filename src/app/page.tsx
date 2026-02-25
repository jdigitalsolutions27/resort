import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck2,
  MessageCircleMore,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { RoomCard } from "@/components/ui/RoomCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { amenityGalleryImages } from "@/data/amenities";
import { featuredRooms, rooms } from "@/data/rooms";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium island resort demo website with conversion-focused sections for bookings.",
};

const benefits = [
  {
    icon: CalendarCheck2,
    title: "Seamless Booking Flow",
    description: "Guests can send complete booking inquiries in less than 2 minutes.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Optimized for travelers browsing on phones and tablets.",
  },
  {
    icon: Sparkles,
    title: "Luxury Visual Storytelling",
    description: "Premium visuals and typography create instant credibility.",
  },
  {
    icon: MessageCircleMore,
    title: "Fast Guest Communication",
    description: "Inquiry data is organized for faster, clearer staff responses.",
  },
];

const salesBulletPoints = [
  "Accept booking inquiries even when you're offline",
  "Turn Facebook messages into organized bookings",
  "Mobile-first website guests trust",
  "Professional online presence increases credibility",
];

const demoMetrics = [
  "+30% inquiry potential",
  "Faster response time",
  "24/7 availability",
  "Mobile-optimized guests",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/12389383/pexels-photo-12389383.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1320&dpr=2"
          alt="Luxury island resort aerial view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f262b]/80 via-[#17363c]/65 to-[#1f4a54]/35" />

        <div className="relative py-20 sm:py-28 md:py-36">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="max-w-3xl text-white">
              <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em]">
                Premium Island Retreat
              </p>
              <h1 className="mt-6 text-4xl leading-tight sm:text-5xl md:text-6xl">
                Your Perfect Island Escape
              </h1>
              <p className="mt-5 max-w-2xl text-sm text-white/85 sm:text-base">
                A luxury resort experience crafted for relaxation, celebration, and unforgettable
                getaways by the sea.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/rooms"
                  style={{ color: "#102529" }}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#f8f1e6] bg-[#f8f1e6] px-6 py-3 text-sm font-semibold shadow-lg shadow-black/20 transition hover:bg-[#efe2cf]"
                >
                  View Rooms
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/45 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book Now
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="rounded-3xl border border-line bg-card p-6 shadow-luxury md:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl text-accent-dark">Quick Booking Inquiry</h2>
                <p className="mt-1 text-sm text-muted">Check availability and send details in one step.</p>
              </div>
            </div>

            <form action="/booking" method="get" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.12em] text-muted" htmlFor="quick-checkIn">
                  Check-in
                </label>
                <input
                  id="quick-checkIn"
                  name="checkIn"
                  type="date"
                  className="mt-1 min-h-[44px] w-full rounded-2xl border border-line bg-white px-3 text-sm outline-none transition focus:border-accent"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.12em] text-muted" htmlFor="quick-checkOut">
                  Check-out
                </label>
                <input
                  id="quick-checkOut"
                  name="checkOut"
                  type="date"
                  className="mt-1 min-h-[44px] w-full rounded-2xl border border-line bg-white px-3 text-sm outline-none transition focus:border-accent"
                />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.12em] text-muted" htmlFor="quick-guests">
                  Guests
                </label>
                <select
                  id="quick-guests"
                  name="guests"
                  className="mt-1 min-h-[44px] w-full rounded-2xl border border-line bg-white px-3 text-sm outline-none transition focus:border-accent"
                  defaultValue="2"
                >
                  {[1, 2, 3, 4, 5, 6].map((count) => (
                    <option key={count} value={count}>
                      {count} Guest{count > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-[0.12em] text-muted" htmlFor="quick-roomType">
                  Room Type
                </label>
                <select
                  id="quick-roomType"
                  name="roomType"
                  className="mt-1 min-h-[44px] w-full rounded-2xl border border-line bg-white px-3 text-sm outline-none transition focus:border-accent"
                  defaultValue=""
                >
                  <option value="">Any room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="min-h-[44px] rounded-2xl bg-accent px-4 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Check Availability
              </button>
            </form>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">Why Choose This Resort</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Designed for comfort and trust, from first click to final check-in.
            </p>
          </MotionReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <MotionReveal key={benefit.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-line bg-card p-6 shadow-luxury">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e3eff0] text-accent-dark">
                    <benefit.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-2xl text-accent-dark">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{benefit.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">Featured Rooms</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              Carefully selected accommodations for couples, families, and groups.
            </p>
          </MotionReveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredRooms.map((room, index) => (
              <MotionReveal key={room.id} delay={index * 0.05}>
                <RoomCard room={room} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="rounded-3xl border border-line bg-card p-6 shadow-luxury md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl text-accent-dark sm:text-4xl">
                  How This Website Helps Your Resort Get More Bookings
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  This demo is built for owners who want more inquiries with less manual follow-up.
                  It creates a professional first impression and turns interest into organized leads.
                </p>
                <ul className="mt-6 space-y-3">
                  {salesBulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-accent-dark">
                      <Star size={16} className="mt-1 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {demoMetrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-2xl border border-line bg-[#f2f7f7] p-5 text-center"
                  >
                    <p className="text-lg font-semibold text-accent-dark">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">What Guests Say</h2>
          </MotionReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <MotionReveal key={testimonial.id} delay={index * 0.05}>
                <TestimonialCard testimonial={testimonial} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <h2 className="text-3xl text-accent-dark sm:text-4xl">Gallery Preview</h2>
          </MotionReveal>
          <div className="mt-8">
            <GalleryGrid items={amenityGalleryImages.slice(0, 6)} columns="three" />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get more bookings?"
        description="Launch a conversion-focused resort website that captures inquiries, builds trust, and helps your team respond faster."
        primaryCta={{ label: "Start Booking Demo", href: "/booking" }}
        secondaryCta={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}

