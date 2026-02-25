"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { rooms } from "@/data/rooms";

const bookingSchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name."),
    email: z.string().email("Please enter a valid email."),
    mobileNumber: z
      .string()
      .min(7, "Please enter a valid mobile number.")
      .max(16, "Mobile number is too long."),
    checkIn: z.string().min(1, "Check-in date is required."),
    checkOut: z.string().min(1, "Check-out date is required."),
    guests: z
      .number()
      .int()
      .min(1, "At least 1 guest is required.")
      .max(12, "Maximum of 12 guests for online inquiry."),
    roomType: z.string().min(1, "Please select a room type."),
    specialRequests: z.string().max(400, "Please keep requests under 400 characters.").optional(),
  })
  .superRefine((values, ctx) => {
    if (values.checkIn && values.checkOut && values.checkOut < values.checkIn) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Check-out must be later than check-in.",
        path: ["checkOut"],
      });
    }
  });

type BookingFormValues = z.infer<typeof bookingSchema>;

type BookingInquiryFormProps = {
  prefill?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomType?: string;
  };
};

const inputClassName =
  "mt-1 w-full min-h-[44px] rounded-2xl border border-line bg-white px-4 py-2 text-sm text-accent-dark outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15";

export function BookingInquiryForm({ prefill }: BookingInquiryFormProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const defaultGuests = useMemo(() => {
    const parsed = Number(prefill?.guests);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 2;
  }, [prefill?.guests]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      checkIn: prefill?.checkIn ?? "",
      checkOut: prefill?.checkOut ?? "",
      guests: defaultGuests,
      roomType: prefill?.roomType ?? "",
      specialRequests: "",
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSuccessOpen(true);

    reset({
      fullName: "",
      email: "",
      mobileNumber: "",
      checkIn: values.checkIn,
      checkOut: values.checkOut,
      guests: values.guests,
      roomType: values.roomType,
      specialRequests: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl border border-line bg-card p-6 shadow-luxury sm:p-8"
        noValidate
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e3eff0] text-accent-dark">
            <Sparkles size={18} />
          </span>
          <div>
            <h2 className="text-2xl text-accent-dark">Booking Inquiry Form</h2>
            <p className="text-sm text-muted">Secure your preferred dates and room in minutes.</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-accent-dark">
              Full Name
            </label>
            <input id="fullName" type="text" className={inputClassName} {...register("fullName")} />
            {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-accent-dark">
              Email
            </label>
            <input id="email" type="email" className={inputClassName} {...register("email")} />
            {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
          </div>

          <div>
            <label htmlFor="mobileNumber" className="text-sm font-medium text-accent-dark">
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="tel"
              className={inputClassName}
              placeholder="09XXXXXXXXX"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber ? (
              <p className="mt-1 text-xs text-rose-600">{errors.mobileNumber.message}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="roomType" className="text-sm font-medium text-accent-dark">
              Room Type
            </label>
            <select id="roomType" className={inputClassName} {...register("roomType")}>
              <option value="">Select room type</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
            {errors.roomType ? <p className="mt-1 text-xs text-rose-600">{errors.roomType.message}</p> : null}
          </div>

          <div>
            <label htmlFor="checkIn" className="text-sm font-medium text-accent-dark">
              Check-in
            </label>
            <input id="checkIn" type="date" className={inputClassName} {...register("checkIn")} />
            {errors.checkIn ? <p className="mt-1 text-xs text-rose-600">{errors.checkIn.message}</p> : null}
          </div>

          <div>
            <label htmlFor="checkOut" className="text-sm font-medium text-accent-dark">
              Check-out
            </label>
            <input id="checkOut" type="date" className={inputClassName} {...register("checkOut")} />
            {errors.checkOut ? <p className="mt-1 text-xs text-rose-600">{errors.checkOut.message}</p> : null}
          </div>

          <div>
            <label htmlFor="guests" className="text-sm font-medium text-accent-dark">
              Guests
            </label>
            <select
              id="guests"
              className={inputClassName}
              {...register("guests", {
                setValueAs: (value) => Number(value),
              })}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((guestCount) => (
                <option key={guestCount} value={guestCount}>
                  {guestCount} Guest{guestCount > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            {errors.guests ? <p className="mt-1 text-xs text-rose-600">{errors.guests.message}</p> : null}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="specialRequests" className="text-sm font-medium text-accent-dark">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              rows={4}
              className={`${inputClassName} resize-none`}
              placeholder="Let us know if you need airport transfer, early check-in, or celebration setup."
              {...register("specialRequests")}
            />
            {errors.specialRequests ? (
              <p className="mt-1 text-xs text-rose-600">{errors.specialRequests.message}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-[#f2f6f6] p-4">
          <p className="flex items-center gap-2 text-xs text-muted">
            <ShieldCheck size={16} className="text-accent" />
            Your details are used for booking coordination only.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {isSuccessOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#102529]/45 p-4 backdrop-blur-sm"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              className="w-full max-w-md rounded-3xl border border-line bg-card p-8 text-center shadow-2xl"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ddf4e8] text-[#1f7f51]">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-3xl text-accent-dark">Inquiry Sent</h3>
              <p className="mt-3 text-sm text-muted">
                Thank you! Your inquiry was sent successfully.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
                onClick={() => setIsSuccessOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

