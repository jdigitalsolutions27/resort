import { Star } from "lucide-react";
import { type Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-card p-6 shadow-luxury">
      <div className="mb-4 flex items-center gap-1 text-amber-500">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-accent-dark">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-muted">{testimonial.role}</p>
      </div>
    </article>
  );
}

