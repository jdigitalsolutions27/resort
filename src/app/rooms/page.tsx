import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { RoomRatesSection } from "@/components/sections/RoomRatesSection";

export const metadata: Metadata = {
  title: "Room Rates",
  description:
    "Explore budget, family, and premium room rates with inclusions and inquiry-ready calls to action.",
};

export default function RoomsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="https://images.pexels.com/photos/35141486/pexels-photo-35141486.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1200&dpr=2"
          alt="Resort room interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#0f2b31]/65" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Room Rates</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Find the Perfect Room for Your Guests</h1>
            <p className="mt-4 text-sm text-white/85 sm:text-base">
              Flexible options for couples, families, and premium travelers, with clear pricing and
              inquiry-ready details.
            </p>
          </MotionReveal>
        </div>
      </section>

      <RoomRatesSection />

      <CTASection
        title="Need help choosing the best room mix?"
        description="Our demo team can help tailor room labels, pricing presentation, and inquiry flows for your actual resort operations."
        primaryCta={{ label: "Send Booking Inquiry", href: "/booking" }}
        secondaryCta={{ label: "View Amenities", href: "/amenities" }}
      />
    </>
  );
}



