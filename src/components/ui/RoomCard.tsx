import Image from "next/image";
import Link from "next/link";
import { Check, Users } from "lucide-react";
import { type Room } from "@/data/rooms";

type RoomCardProps = {
  room: Room;
  showCategory?: boolean;
};

const phpCurrency = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export function RoomCard({ room, showCategory = true }: RoomCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-card shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl text-accent-dark">{room.name}</h3>
          <p className="text-lg font-semibold text-accent-dark">
            {phpCurrency.format(room.price)}{" "}
            <span className="text-sm font-medium text-muted">/ night</span>
          </p>
        </div>

        {showCategory ? (
          <span className="inline-flex rounded-full bg-[#e5f0f1] px-3 py-1 text-xs font-medium text-accent-dark">
            {room.category}
          </span>
        ) : null}

        <p className="text-sm leading-relaxed text-muted">{room.description}</p>

        <p className="flex items-center gap-2 text-sm text-accent-dark">
          <Users size={16} />
          Capacity: {room.capacity}
        </p>

        <ul className="space-y-2 text-sm text-muted">
          {room.inclusions.map((inclusion) => (
            <li key={inclusion} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 text-accent" />
              {inclusion}
            </li>
          ))}
        </ul>

        <Link
          href={`/booking?roomType=${encodeURIComponent(room.name)}`}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
        >
          Inquire This Room
        </Link>
      </div>
    </article>
  );
}

