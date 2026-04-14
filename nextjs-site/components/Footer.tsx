"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fb] px-4 pb-4 text-white sm:px-6 sm:pb-6">
      <div className="mx-auto w-full max-w-7xl rounded-[34px] bg-[#123b78] shadow-[0_28px_70px_rgba(10,29,64,0.2)] sm:rounded-[40px]">
        <div className="mx-auto w-[92%] max-w-7xl px-4 py-8 sm:w-[88%] sm:px-6 sm:py-12">
        <div className="grid gap-8 xl:grid-cols-4">
          {/* Brand */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="GlobalFlow Logo"
                width={34}
                height={34}
                className="h-8 w-8 object-contain"
              />

              <span className="text-[1.05rem] font-semibold text-white">
                GlobalFlow Trading
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[420px] text-[14px] leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                Leading the way in global trade coordination and product sourcing
                from Toronto to the world.
              </p>

              <div className="flex flex-col gap-2 text-[14px] text-white/80 sm:flex-row sm:flex-wrap sm:gap-3 xl:hidden">
                <a
                  href="mailto:info@globalflowtrading.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  <span className="text-base leading-none">✉️</span>
                  <span className="leading-none">info@globalflowtrading.com</span>
                </a>

                <a
                  href="tel:+14162540593"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  <span className="text-base leading-none">📞</span>
                  <span className="leading-none">+1 (416) 254-0593</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:gap-6 xl:col-span-3 xl:grid-cols-3">
            {/* Quick Links */}
            <div className="min-w-0">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm sm:tracking-wide">
                Quick Links
              </h4>

              <ul className="mt-4 space-y-3 text-[14px] text-white/70 sm:mt-5 sm:space-y-4 sm:text-[15px]">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition hover:text-white">
                    Product Catalogue
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="min-w-0">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm sm:tracking-wide">
                Compliance
              </h4>

              <ul className="mt-4 space-y-3 text-[14px] text-white/70 sm:mt-5 sm:space-y-4 sm:text-[15px]">
                <li>
                  <Link
                    href="/services#compliance-documentation"
                    className="transition hover:text-white"
                  >
                    Compliance & Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#import-export"
                    className="transition hover:text-white"
                  >
                    Import / Export Coordination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#logistics-freight"
                    className="transition hover:text-white"
                  >
                    Logistics & Freight Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#global-sourcing"
                    className="transition hover:text-white"
                  >
                    Global Sourcing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="hidden xl:block">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">
                Contact Us
              </h4>

              <div className="mt-5 space-y-4 text-[15px] text-white/70">
                <div className="flex items-start gap-3">
                  <span>✉️</span>
                  <a
                    href="mailto:info@globalflowtrading.com"
                    className="transition hover:text-white"
                  >
                    info@globalflowtrading.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span>📞</span>
                  <a href="tel:+14162540593" className="transition hover:text-white">
                    +1 (416) 254-0593
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span>📍</span>
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/15 pt-5 text-center text-[12px] text-white/60 sm:mt-10 sm:pt-6 sm:text-[14px]">
          © 2026 GlobalFlow Trading Inc. All rights reserved.
        </div>
        </div>
      </div>
    </footer>
  );
}
