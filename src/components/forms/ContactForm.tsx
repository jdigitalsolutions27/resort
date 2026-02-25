"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  mobileNumber: z
    .string()
    .min(7, "Please enter a valid contact number.")
    .max(16, "Contact number is too long."),
  message: z.string().min(12, "Message should be at least 12 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClassName =
  "mt-1 w-full min-h-[44px] rounded-2xl border border-line bg-white px-4 py-2 text-sm text-accent-dark outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSent(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-line bg-card p-6 shadow-luxury sm:p-8"
    >
      <h2 className="text-2xl text-accent-dark">Contact the Resort Team</h2>
      <p className="mt-2 text-sm text-muted">
        Ask about rates, partnerships, events, or custom packages.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contact-fullName" className="text-sm font-medium text-accent-dark">
            Full Name
          </label>
          <input id="contact-fullName" type="text" className={inputClassName} {...register("fullName")} />
          {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-accent-dark">
            Email
          </label>
          <input id="contact-email" type="email" className={inputClassName} {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="contact-mobile" className="text-sm font-medium text-accent-dark">
            Mobile Number
          </label>
          <input
            id="contact-mobile"
            type="tel"
            className={inputClassName}
            placeholder="09XXXXXXXXX"
            {...register("mobileNumber")}
          />
          {errors.mobileNumber ? (
            <p className="mt-1 text-xs text-rose-600">{errors.mobileNumber.message}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-accent-dark">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={`${inputClassName} resize-none`}
            placeholder="Tell us your preferred dates, group size, and questions."
            {...register("message")}
          />
          {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p> : null}
        </div>
      </div>

      {sent ? (
        <p className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#e3f6eb] px-3 py-2 text-xs text-[#1f7f51]">
          <CheckCircle2 size={15} />
          Message sent. Our team will get back to you shortly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

