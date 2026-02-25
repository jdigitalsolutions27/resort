import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, MessageSquareShare, ShieldCheck, Smartphone } from "lucide-react";
import { BookingInquiryForm } from "@/components/forms/BookingInquiryForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Booking Inquiry",
  description:
    "Send booking inquiries with room and date preferences using a validated and mobile-first form.",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type BookingPageProps = {
  searchParams: SearchParams;
};

const faqItems = [
  {
    question: "How soon can we expect a response?",
    answer:
      "Most inquiries receive a response within 15 to 60 minutes during business hours.",
  },
  {
    question: "Can we request early check-in or late check-out?",
    answer:
      "Yes. Add your request in the special requests field and the team will confirm availability.",
  },
  {
    question: "Do you accept group and corporate bookings?",
    answer:
      "Yes. Group inquiries are welcome, and custom room arrangements can be provided.",
  },
  {
    question: "Can we book without immediate payment?",
    answer:
      "This form is for inquiry and reservation coordination first. Payment instructions follow after confirmation.",
  },
  {
    question: "Do children count as guests?",
    answer:
      "Yes. Please include all guests so room recommendations and rates are accurate.",
  },
];

function toSingleValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const resolvedParams = await searchParams;

  const prefill = {
    checkIn: toSingleValue(resolvedParams.checkIn),
    checkOut: toSingleValue(resolvedParams.checkOut),
    guests: toSingleValue(resolvedParams.guests),
    roomType: toSingleValue(resolvedParams.roomType),
  };

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="https://images.pexels.com/photos/5288134/pexels-photo-5288134.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1200&dpr=2"
          alt="Guest checking into luxury resort"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#0f2b31]/70" />

        <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Booking Inquiry</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Reserve Your Stay with Confidence</h1>
            <p className="mt-4 text-sm text-white/85 sm:text-base">
              Send complete booking details in one message so your team can respond faster and close
              more reservations.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.35fr_1fr]">
            <MotionReveal>
              <BookingInquiryForm prefill={prefill} />
            </MotionReveal>

            <div className="space-y-6">
              <MotionReveal>
                <article className="rounded-3xl border border-line bg-card p-6 shadow-luxury">
                  <h2 className="text-2xl text-accent-dark">Trust Indicators</h2>
                  <ul className="mt-5 space-y-4">
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <Clock3 size={16} className="mt-1 shrink-0 text-accent" />
                      Faster response time through organized inquiry details.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <ShieldCheck size={16} className="mt-1 shrink-0 text-accent" />
                      24/7 availability for inquiries, even outside office hours.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <Smartphone size={16} className="mt-1 shrink-0 text-accent" />
                      Mobile-optimized flow for guests browsing on phones.
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted">
                      <MessageSquareShare size={16} className="mt-1 shrink-0 text-accent" />
                      Turn social media interest into structured booking inquiries.
                    </li>
                  </ul>
                </article>
              </MotionReveal>

              <MotionReveal>
                <article className="rounded-3xl border border-line bg-card p-6 shadow-luxury">
                  <h2 className="text-2xl text-accent-dark">Booking FAQs</h2>
                  <div className="mt-4">
                    <FAQAccordion items={faqItems} />
                  </div>
                </article>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



