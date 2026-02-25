import Image from "next/image";
import {
  Bike,
  ParkingCircle,
  Plane,
  Sparkles,
  UtensilsCrossed,
  Waves,
  Wifi,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { type Amenity } from "@/data/amenities";

const icons: Record<Amenity["icon"], LucideIcon> = {
  pool: Waves,
  wifi: Wifi,
  restaurant: UtensilsCrossed,
  spa: Sparkles,
  bar: Wine,
  parking: ParkingCircle,
  airport: Plane,
  activities: Bike,
};

type AmenityCardProps = {
  amenity: Amenity;
};

export function AmenityCard({ amenity }: AmenityCardProps) {
  const Icon = icons[amenity.icon];

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-card shadow-luxury">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={amenity.image}
          alt={amenity.title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e3eff0] text-accent-dark">
          <Icon size={20} />
        </div>
        <h3 className="text-2xl text-accent-dark">{amenity.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{amenity.description}</p>
      </div>
    </article>
  );
}

