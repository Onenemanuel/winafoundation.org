import { Mail, MapPin, Phone } from "lucide-react";
import { Image } from "@/components/Image";
import { Link } from "@/components/Link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programmes" },
  { href: "/approaches", label: "Our Approaches" },
  { href: "/stories", label: "Stories & Updates" },
  { href: "/contact", label: "Contact Us" },
  { href: "/support", label: "Partner With Us" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link className="flex items-center gap-3 mb-6" href="/">
              <Image
                src="/logo.jpeg"
                alt="WINAfrica Foundation Logo"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0"
              />
              <span className="font-heading font-bold text-2xl md:text-3xl text-primaryDark leading-none">
                WIN
                <span className="text-secondary mr-1.5">Africa</span>
                <span className="hidden sm:inline">Foundation</span>
              </span>
            </Link>
            <p className="text-text max-w-md">
              Championing Change. Working towards healthier, resilient
              communities through inclusive and evidence-based health
              interventions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-textDark mb-6">Explore</h4>
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-text hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 WINAfrica Foundation.</p>
          <p className="text-gray-500 text-sm flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-center">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
              <span>Lira City, Northern Uganda</span>
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Mail className="w-4 h-4 text-gray-400 shrink-0" />
              <a
                href="mailto:info@winafoundation.org"
                className="hover:text-gray-700 transition-colors"
              >
                info@winafoundation.org
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="whitespace-nowrap">
                <a
                  href="tel:+256790732411"
                  className="hover:text-gray-700 transition-colors"
                >
                  +256 790 732 411
                </a>
                {" / "}
                <a
                  href="tel:+256781938772"
                  className="hover:text-gray-700 transition-colors"
                >
                  +256 781 938 772
                </a>
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
