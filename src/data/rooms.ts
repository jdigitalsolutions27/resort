export type RoomCategory = "Budget" | "Family" | "Premium";

export type Room = {
  id: string;
  name: string;
  category: RoomCategory;
  price: number;
  capacity: string;
  description: string;
  inclusions: string[];
  image: string;
};

export const roomFilterTabs = ["All", "Budget", "Family", "Premium"] as const;
export type RoomFilterTab = (typeof roomFilterTabs)[number];

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    category: "Budget",
    price: 3200,
    capacity: "2 Guests",
    description: "Comfort-first room with garden-facing balcony and fast WiFi.",
    inclusions: ["Breakfast", "Air-conditioning", "Smart TV"],
    image:
      "https://images.pexels.com/photos/8081396/pexels-photo-8081396.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    category: "Premium",
    price: 4600,
    capacity: "2 Guests",
    description: "Spacious suite layout with premium linens and lounge corner.",
    inclusions: ["Breakfast", "Welcome drinks", "Pool access"],
    image:
      "https://images.pexels.com/photos/28347478/pexels-photo-28347478.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    category: "Family",
    price: 6200,
    capacity: "4 Guests",
    description: "Two-zone suite ideal for families needing room to unwind.",
    inclusions: ["Breakfast", "Kids amenity kit", "Mini bar"],
    image:
      "https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "beachfront-villa",
    name: "Beachfront Villa",
    category: "Premium",
    price: 9800,
    capacity: "4 Guests",
    description: "Private villa with direct beachfront access and sunset deck.",
    inclusions: ["Butler service", "Private plunge pool", "Roundtrip transfer"],
    image:
      "https://images.pexels.com/photos/30722813/pexels-photo-30722813.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "poolside",
    name: "Poolside Room",
    category: "Budget",
    price: 3900,
    capacity: "3 Guests",
    description: "Easy pool access, ideal for short getaways and active travelers.",
    inclusions: ["Breakfast", "Pool towels", "Late checkout (subject to availability)"],
    image:
      "https://images.pexels.com/photos/18201945/pexels-photo-18201945.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
  {
    id: "barkada",
    name: "Barkada Room",
    category: "Family",
    price: 6800,
    capacity: "6 Guests",
    description: "Group-friendly setup with bunk lounge and social space.",
    inclusions: ["Breakfast", "Board games", "In-room dining discount"],
    image:
      "https://images.pexels.com/photos/28909289/pexels-photo-28909289.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2",
  },
];

export const featuredRooms = rooms.slice(0, 3);

