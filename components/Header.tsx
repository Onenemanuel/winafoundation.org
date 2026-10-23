"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Image } from "@/components/Image";
import { Link } from "@/components/Link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programmes" },
  { href: "/approaches", label: "Our Approaches" },
  { href: "/stories", label: "Stories & Updates" },
  { href: "/contact", label: "Contact Us" },
];

function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return path === "/";
  return path === target;
}

export function Header() {
  const pathname = usePathname() || "/";
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header>
      <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center">
              <Link className="flex items-center gap-3 group" href="/">
                <Image
                  src="/logo.jpeg"
                  alt="WINAfrica Foundation Logo"
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0"
                  priority
                />
                <span className="font-heading font-bold text-xl xl:text-2xl text-primaryDark leading-none">
                  WIN
                  <span className="text-secondary mr-1.5">Africa</span>
                  <span className="hidden sm:inline">Foundation</span>
                </span>
              </Link>
            </div>

            <div className="hidden xl:flex items-center space-x-4">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(pathname, item.href)
                      ? "text-primary font-bold text-sm transition-colors"
                      : "text-text hover:text-primary transition-colors font-medium text-sm"
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="flex gap-1 items-center bg-secondary hover:bg-secondaryHover text-white px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap"
                href="/support"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="xl:hidden flex items-center">
              <button
                type="button"
                className="text-text hover:text-primary focus:outline-none"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpenPath(open ? null : pathname)}
              >
                {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${open ? "block" : "hidden"} xl:hidden bg-white border-b border-gray-100 absolute w-full`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(pathname, item.href)
                    ? "block px-3 py-3 text-base font-bold text-primary bg-primary/5 rounded-lg"
                    : "block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg"
              href="/support"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
