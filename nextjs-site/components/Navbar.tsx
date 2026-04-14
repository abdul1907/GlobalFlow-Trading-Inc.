"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    if (href === "/home") return pathname === "/" || pathname === "/home";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex justify-center px-3 pt-3 sm:px-0 sm:pt-4">
        <div
          className={`${
            scrolled ? "w-[94%] lg:w-[88%] xl:w-[76%]" : "w-full lg:w-[96%]"
          } transition-all duration-500 ease-in-out`}
        >
          {/* MAIN NAVBAR PILL */}
          <SpotlightCard
            className="rounded-full border border-white/10 bg-[#060912]/95 px-3 py-1 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-5 sm:py-0.5"
            spotlightColor="rgba(255, 255, 255, 0.14)"
          >
            <div className="relative flex items-center justify-between gap-2">
              {/* Left brand */}
              <Link
                href="/home"
                className="z-10 flex min-w-0 items-center gap-2 sm:gap-3"
                onClick={closeMenu}
              >
                <Image
                  src="/logo.png"
                  alt="GlobalFlow Logo"
                  width={40}
                  height={40}
                  className="h-6 w-6 flex-shrink-0 object-contain sm:h-7 sm:w-7"
                />
                <span className="max-w-[12rem] truncate text-[0.78rem] font-semibold text-white sm:max-w-none sm:text-[0.95rem] lg:text-[1.02rem]">
                  GlobalFlow Trading Inc.
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 whitespace-nowrap 2xl:gap-6 xl:flex">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  const content = (
                    <motion.span
                      className={`relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[15px] ${
                        active ? "font-semibold text-white" : "text-white/70"
                      }`}
                      animate={{
                        color: active
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.7)",
                      }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={!active ? { y: -1, color: "rgba(255,255,255,1)" } : undefined}
                    >
                      {active && (
                        <motion.span
                          layoutId="desktop-active-nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                          transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 24,
                            mass: 1.05,
                          }}
                        />
                      )}
                      {item.label}
                    </motion.span>
                  );

                  if (item.href === "#") {
                    return (
                      <span key={item.label} className="cursor-default">
                        {content}
                      </span>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href}>
                      {content}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop button */}
              <div className="ml-auto hidden xl:flex">
                <Link
                  href="/contact#book-call"
                  className="rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-[#060912] transition hover:bg-gray-200"
                >
                  <ShinyText
                    text="Book a Call"
                    speed={3}
                    className="text-[14px] font-semibold"
                    color="#0b1220"
                    shineColor="#5b8cff"
                    spread={135}
                  />
                </Link>
              </div>

              {/* Mobile button */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="ml-auto inline-flex h-11 items-center rounded-full border border-white/15 px-5 text-[14px] font-semibold text-white transition hover:bg-white/5 xl:hidden"
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </SpotlightCard>

          {/* MOBILE DROPDOWN - OUTSIDE THE PILL */}
          {menuOpen && (
            <div className="mt-3 rounded-3xl border border-white/10 bg-[#060912]/95 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl xl:hidden">
              <div className="flex flex-col gap-2 text-sm text-white">
                <Link
                  href="/home"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/home")
                      ? "bg-white/10 font-semibold text-white ring-1 ring-white/15"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/about")
                      ? "bg-white/10 font-semibold text-white ring-1 ring-white/15"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/services")
                      ? "bg-white/10 font-semibold text-white ring-1 ring-white/15"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Services
                </Link>

                <span className="rounded-xl px-3 py-2 text-white/75">
                  Products
                </span>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/contact")
                      ? "bg-white/10 font-semibold text-white ring-1 ring-white/15"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Contact
                </Link>

                <Link
                  href="/contact#book-call"
                  onClick={closeMenu}
                  className="mt-3 rounded-full bg-white px-5 py-2.5 text-center font-semibold text-[#060912]"
                >
                  <ShinyText
                    text="Book a Call"
                    speed={3}
                    className="text-sm font-semibold"
                    color="#0b1220"
                    shineColor="#5b8cff"
                    spread={135}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
