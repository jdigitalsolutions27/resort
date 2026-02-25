import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
  columns?: "three" | "four";
};

export function GalleryGrid({ items, columns = "three" }: GalleryGridProps) {
  return (
    <div
      className={`grid gap-4 ${
        columns === "four"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <div
          key={item.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}

