import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal className="overflow-hidden rounded-3xl border border-line bg-gradient-to-r from-[#0f3138] via-[#1f4b54] to-[#2f6974] p-8 text-white shadow-luxury md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.25fr_auto]">
            <div>
              <h2 className="text-3xl sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-sm text-white/85 sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href={primaryCta.href}
                style={{ color: "#102529" }}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#f8f1e6] bg-[#f8f1e6] px-6 py-3 text-sm font-semibold shadow-lg shadow-black/10 transition hover:bg-[#efe2cf]"
              >
                {primaryCta.label}
                <ArrowRight size={16} />
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

