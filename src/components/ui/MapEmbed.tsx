type MapEmbedProps = {
  title?: string;
};

export function MapEmbed({ title = "Azure Cove Resort location map" }: MapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-card p-3 shadow-luxury">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        {/* Replace the iframe src below with your live resort Google Maps embed URL. */}
        <iframe
          title={title}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Tacloban+City&output=embed"
        />
      </div>
    </div>
  );
}

