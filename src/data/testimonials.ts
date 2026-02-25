export type Testimonial = {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Janine M.",
    role: "Weekend Guest, Manila",
    review:
      "Booking was quick, the staff replied fast, and the room looked exactly like the photos. It felt trustworthy before we even arrived.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Carlo & Bea",
    role: "Family Travelers, Cebu",
    review:
      "The website made it easy to compare room options on our phones. We sent an inquiry at night and got confirmation first thing in the morning.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Ramon D.",
    role: "Group Organizer, Tacloban",
    review:
      "We used to message resorts on Facebook only. This inquiry process was cleaner and helped us lock dates faster.",
    rating: 5,
  },
];

