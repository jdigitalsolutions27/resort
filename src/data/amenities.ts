export type Amenity = {
  id: string;
  title: string;
  description: string;
  icon:
    | "pool"
    | "wifi"
    | "restaurant"
    | "spa"
    | "bar"
    | "parking"
    | "airport"
    | "activities";
  image: string;
};

export const amenities: Amenity[] = [
  {
    id: "pool",
    title: "Infinity Pool",
    description: "Scenic pool lounge with dedicated shallow and sunset decks.",
    icon: "pool",
    image:
      "https://images.pexels.com/photos/13893946/pexels-photo-13893946.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "wifi",
    title: "High-Speed WiFi",
    description: "Reliable internet in all rooms and common areas.",
    icon: "wifi",
    image:
      "https://images.pexels.com/photos/12663162/pexels-photo-12663162.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "restaurant",
    title: "All-Day Restaurant",
    description: "Filipino and international dishes curated by local chefs.",
    icon: "restaurant",
    image:
      "https://images.pexels.com/photos/10066895/pexels-photo-10066895.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "spa",
    title: "Signature Spa",
    description: "Relaxing body treatments designed for recovery and calm.",
    icon: "spa",
    image:
      "https://images.pexels.com/photos/4170175/pexels-photo-4170175.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "bar",
    title: "Sunset Bar",
    description: "Craft cocktails, fresh juices, and evening acoustic sessions.",
    icon: "bar",
    image:
      "https://images.pexels.com/photos/27897604/pexels-photo-27897604.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "parking",
    title: "Secure Parking",
    description: "Well-lit on-site parking with 24/7 security personnel.",
    icon: "parking",
    image:
      "https://images.pexels.com/photos/17389565/pexels-photo-17389565.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    description: "Scheduled shuttle for seamless arrivals and departures.",
    icon: "airport",
    image:
      "https://images.pexels.com/photos/16954180/pexels-photo-16954180.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "activities",
    title: "Island Activities",
    description: "Guided tours, paddleboarding, and curated outdoor adventures.",
    icon: "activities",
    image:
      "https://images.pexels.com/photos/35498108/pexels-photo-35498108.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
];

export const resortRules = [
  "Check-in starts at 2:00 PM and check-out is at 12:00 PM.",
  "A valid government-issued ID is required upon arrival.",
  "Quiet hours are observed from 10:00 PM to 6:00 AM.",
  "Outside food and drinks are allowed only in designated areas.",
  "Pets are welcome in selected rooms with prior notice.",
];

export const amenityGalleryImages = [
  {
    src: "https://images.pexels.com/photos/32262469/pexels-photo-32262469.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Resort beachfront at sunrise",
  },
  {
    src: "https://images.pexels.com/photos/6871847/pexels-photo-6871847.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Private villa exterior",
  },
  {
    src: "https://images.pexels.com/photos/18432272/pexels-photo-18432272.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Poolside lounge chairs",
  },
  {
    src: "https://images.pexels.com/photos/19947936/pexels-photo-19947936.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Family enjoying island activities",
  },
  {
    src: "https://images.pexels.com/photos/4441790/pexels-photo-4441790.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Cozy resort bedroom interior",
  },
  {
    src: "https://images.pexels.com/photos/35546241/pexels-photo-35546241.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Spa treatment room",
  },
  {
    src: "https://images.pexels.com/photos/29058903/pexels-photo-29058903.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Signature restaurant dining area",
  },
  {
    src: "https://images.pexels.com/photos/34710615/pexels-photo-34710615.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Night lights by the resort pathway",
  },
  {
    src: "https://images.pexels.com/photos/6758531/pexels-photo-6758531.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Kayaking near shore",
  },
  {
    src: "https://images.pexels.com/photos/31080809/pexels-photo-31080809.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Premium suite with balcony",
  },
  {
    src: "https://images.pexels.com/photos/19169811/pexels-photo-19169811.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Tropical garden trail",
  },
  {
    src: "https://images.pexels.com/photos/18426842/pexels-photo-18426842.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1300&dpr=2",
    alt: "Sunset view from beachfront deck",
  },
];

