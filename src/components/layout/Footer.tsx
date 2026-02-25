import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Room Rates" },
  { href: "/amenities", label: "Amenities" },
  { href: "/booking", label: "Booking Inquiry" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-[#eff3f2] py-10">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-2xl text-accent-dark">Azure Cove Resort</p>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Demo website crafted for agencies pitching high-converting, mobile-first
              resort websites.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] rounded-full px-4 py-2 text-sm text-accent-dark transition hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} Azure Cove Resort Demo. Built with Next.js and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

