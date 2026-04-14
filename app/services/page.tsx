"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const desktopCards = [
  {
    id: "global-sourcing",
    icon: "⬢",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers for a wide range of products. We work with verified partners to ensure product quality and competitive pricing.",
    imageSrc: "/images/services/global-sourcing-desktop.jpg",
    details: [
      "We help businesses connect with trusted suppliers across different markets.",
      "Our sourcing support focuses on quality, suitability, and supplier coordination.",
      "We work to simplify the sourcing process for growing businesses.",
    ],
  },
  {
    id: "import-export",
    icon: "↔",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation, supplier communication, and shipment coordination. This ensures smooth cross-border transactions.",
    imageSrc: "/images/services/import-export-desktop.jpg",
    details: [
      "We support documentation flow and communication between key parties.",
      "Our team helps manage coordination for international trade activities.",
      "This helps reduce delays and improves operational efficiency.",
    ],
  },
  {
    id: "logistics-freight",
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "GlobalFlow Trading provides support for shipping coordination, freight planning, and logistics management to ensure efficient delivery of products.",
    imageSrc: "/images/services/logistics-desktop.jpg",
    details: [
      "We assist with freight planning and shipping coordination.",
      "Our logistics support helps businesses improve shipment visibility.",
      "We focus on smooth delivery management and transport planning.",
    ],
  },
  {
    id: "compliance-documentation",
    icon: "📄",
    title: "Compliance & Documentation",
    description:
      "We assist businesses with trade documentation and compliance requirements related to international shipping and customs procedures.",
    imageSrc: "/images/services/compliance-desktop.jpg",
    details: [
      "We help businesses prepare and manage trade-related documents.",
      "Our support covers documentation and compliance coordination.",
      "This makes customs and international shipping processes easier to handle.",
    ],
  },
];

const mobileCards = [
  {
    id: "global-sourcing",
    icon: "🗂",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers.",
    imageSrc: "/images/services/global-sourcing-icon.png",
  },
  {
    id: "import-export",
    icon: "↕",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation and shipment coordination.",
    imageSrc: "/images/services/import-export-icon.png",
  },
  {
    id: "logistics-freight",
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "Support for shipping coordination and logistics management.",
  },
  {
    id: "compliance-documentation",
    icon: "📄",
    title: "Compliance & Documentation",
    description:
      "We assist businesses with trade documentation and compliance.",
  },
];

const serviceSteps = [
  {
    title: "Source smarter",
    description:
      "Shortlist reliable suppliers, compare options, and move forward with more confidence.",
  },
  {
    title: "Coordinate globally",
    description:
      "Keep shipments, documentation, and supplier communication moving in sync.",
  },
  {
    title: "Deliver smoothly",
    description:
      "Reduce friction from customs, freight planning, and final delivery execution.",
  },
];

export default function ServicesPage() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const activeCard = useMemo(
    () => desktopCards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId]
  );

  const openModal = (cardId: string) => {
    setActiveCardId(cardId);
  };

  const closeModal = () => {
    setActiveCardId(null);
  };

  useEffect(() => {
    if (!activeCard) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeCard]);

  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:block">
        <section className="bg-[#f3f4f6] pt-2">
          <div className="mx-auto w-[92%] max-w-7xl xl:w-[88%]">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[34px] bg-[#0d4c8f] lg:min-h-[27rem] xl:min-h-[30rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/services/services-hero.png"
                  alt="GlobalFlow Trading services hero"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,31,63,0.9),rgba(8,49,96,0.68))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-8 right-10 h-48 w-48 rounded-full bg-[#9fd0ff]/15 blur-3xl" />

              <div className="relative px-8 py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20">
                <AnimatedContent
                  distance={60}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.15}
                >
                  <div className="max-w-3xl">
                    <FadeContent blur duration={700} easing="ease-out" initialOpacity={0}>
                      <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-sm">
                        Our Expertise
                      </p>
                    </FadeContent>

                    <div className="mt-5">
                      <BlurText
                        text="Comprehensive Global Trading Solutions"
                        delay={120}
                        animateBy="words"
                        direction="top"
                        className="max-w-3xl text-4xl font-bold leading-[1.02] text-white xl:text-6xl"
                      />
                    </div>

                    <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
                      <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/82">
                        Empowering your business with seamless international trade,
                        logistics, and compliance expertise across global markets.
                      </p>
                    </FadeContent>

                    <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
                      <div className="mt-8" />
                    </FadeContent>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-14 xl:w-[88%] lg:py-16">
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.75}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <div className="flex flex-col items-start gap-6 xl:flex-row xl:justify-between">
              <div>
                <h2 className="text-4xl font-bold text-[#16233e] xl:text-[2.3rem]">
                  Specialized Trading Services
                </h2>
                <div className="mt-4 h-[4px] w-14 rounded-full bg-[#0d4c8f]" />
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5e6d89]">
                  We provide end-to-end support for businesses looking to scale
                  their international presence through strategic trade management.
                </p>
              </div>

              <div className="rounded-full border border-[#dde4ee] bg-white/80 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6a7890] shadow-[0_8px_20px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                Four core service pillars
              </div>
            </div>
          </AnimatedContent>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {desktopCards.map((card) => (
              <AnimatedContent
                key={card.id}
                distance={42}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.97}
                threshold={0.15}
              >
                <div id={card.id} className="h-full scroll-mt-28 rounded-[30px]">
                  <SpotlightCard
                    className="group h-full overflow-hidden rounded-[30px] border border-[#e6e9ef] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5"
                    spotlightColor="rgba(13,76,143,0.18)"
                  >
                    <div className="relative h-[220px] overflow-hidden rounded-[28px]">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.45))]" />

                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0d4c8f] text-sm text-white shadow-[0_10px_24px_rgba(13,76,143,0.22)]">
                        {card.icon}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                          Service capability
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-[1.55rem] font-semibold leading-tight text-[#1a2740]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-[14px] leading-7 text-[#6b7890]">
                        {card.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => openModal(card.id)}
                          className="rounded-full border border-[#dbe2ec] bg-[#f7f9fc] px-4 py-2.5 text-[13px] font-semibold text-[#0d4c8f] transition duration-300 hover:border-[#bfd0e6] hover:bg-[#eef5fd]"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </AnimatedContent>
            ))}

            <AnimatedContent
              distance={45}
              direction="vertical"
              reverse={false}
              duration={0.85}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.97}
              threshold={0.15}
            >
              <SpotlightCard
                className="h-full rounded-[32px] bg-[#0d4c8f] p-8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                spotlightColor="rgba(255,255,255,0.12)"
              >
                <div className="flex min-h-[420px] flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      Tailored support
                    </p>
                    <h3 className="mt-4 text-[2rem] font-bold leading-tight">
                      Need a Custom Solution?
                    </h3>

                    <p className="mt-5 max-w-xs text-[15px] leading-8 text-white/80">
                      Our team can design a bespoke strategy tailored to your
                      specific industry, shipment profile, and market requirements.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 text-[14px] leading-7 text-white/80">
                      From sourcing strategy to freight coordination, we help
                      businesses build a smoother international trade workflow.
                    </div>

                    <div className="flex flex-col gap-3">
                      <Link
                        href="/contact#book-call"
                        className="block w-full rounded-full bg-white px-6 py-3 text-center text-[13px] font-semibold text-[#0d4c8f]"
                      >
                        <ShinyText
                          text="Speak with an Expert"
                          speed={3}
                          className="text-[#0d4c8f]"
                        />
                      </Link>

                      <Link
                        href="/contact"
                        className="block w-full rounded-full border border-white/16 bg-white/10 px-6 py-3 text-center text-[13px] font-semibold text-white"
                      >
                        <ShinyText text="Send a Message" speed={3} className="text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-20">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-8 xl:w-[88%] xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <AnimatedContent
              distance={40}
              direction="vertical"
              reverse={false}
              duration={0.75}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <div>
                <h2 className="text-4xl font-bold text-[#16233e] xl:text-[3rem]">
                  Ready to Expand Your Global Reach?
                </h2>

                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-[#6a7890]">
                  Contact our experts today for a customized trading and logistics
                  strategy that puts your business at the forefront of
                  international commerce.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact#book-call"
                    className="rounded-full bg-[#0d4c8f] px-7 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(13,76,143,0.20)]"
                  >
                    <ShinyText
                      text="Schedule a Consultation"
                      speed={3}
                      className="text-white"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-[#d7dce5] bg-white px-7 py-3 text-[13px] font-semibold text-[#394762]"
                  >
                    <ShinyText
                      text="Contact Our Team"
                      speed={3}
                      className="text-[#394762]"
                    />
                  </Link>
                </div>
              </div>
            </AnimatedContent>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceSteps.map((step, index) => (
                <AnimatedContent
                  key={step.title}
                  distance={32 + index * 6}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={0.98}
                  threshold={0.15}
                >
                  <SpotlightCard
                    className="h-full rounded-[28px] border border-[#e1e7ef] bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                    spotlightColor="rgba(13,76,143,0.14)"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#eff6fe] text-[13px] font-semibold text-[#0d4c8f]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-5 text-[1.2rem] font-semibold text-[#16233e]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#64748b]">
                      {step.description}
                    </p>
                  </SpotlightCard>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <section className="mx-auto w-[92%] max-w-3xl py-6 sm:w-[88%]">
          <AnimatedContent
            distance={35}
            direction="vertical"
            reverse={false}
            duration={0.75}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <div className="relative overflow-hidden rounded-[30px] bg-[#0d4c8f] shadow-[0_12px_30px_rgba(13,76,143,0.18)]">
              <div className="absolute inset-0">
                <Image
                  src="/images/services/services-hero.png"
                  alt="GlobalFlow Trading mobile services hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.15),rgba(7,27,53,0.8))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.12),transparent_34%)]" />
              <div className="relative px-5 py-8">
                <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  Global services
                </p>

                <div className="mt-4">
                  <BlurText
                    text="Comprehensive Global Trading Solutions"
                    delay={110}
                    animateBy="words"
                    direction="top"
                    className="text-[2rem] font-bold leading-tight text-white"
                  />
                </div>

                <p className="mt-3 text-[14px] leading-6 text-white/88">
                  Empowering your business with seamless international trade,
                  logistics, and compliance expertise across global markets.
                </p>
              </div>
            </div>
          </AnimatedContent>

          <section className="mt-8">
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={false}
              duration={0.75}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <h2 className="text-[2rem] font-bold text-[#16233e]">
                Specialized Trading Services
              </h2>
              <p className="mt-1 text-[14px] text-[#66758d]">
                We provide end-to-end support for businesses looking to scale
                their international presence through strategic trade management.
              </p>
            </AnimatedContent>

            <div className="mt-5 space-y-4">
              {mobileCards.map((card, index) => (
                <AnimatedContent
                  key={card.id}
                  distance={32 + index * 4}
                  direction="vertical"
                  reverse={false}
                  duration={0.78}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={0.98}
                  threshold={0.15}
                >
                  <motion.button
                    id={card.id}
                    type="button"
                    onClick={() => openModal(card.id)}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="flex w-full scroll-mt-28 items-center gap-4 rounded-[28px] border border-[#e5e8ee] bg-white px-4 py-5 text-left shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-[18px] bg-[#eef2f5]">
                      {card.imageSrc ? (
                        <Image
                          src={card.imageSrc}
                          alt={card.title}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <span className="text-[1.3rem] text-[#0d4c8f]">
                          {card.icon}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.05rem] font-semibold leading-snug text-[#182540]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-6 text-[#7b889e]">
                        {card.description}
                      </p>
                    </div>

                    <div className="text-[1.5rem] text-[#8b97ab]">›</div>
                  </motion.button>
                </AnimatedContent>
              ))}
            </div>

            <AnimatedContent
              distance={36}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <SpotlightCard
                className="mt-6 rounded-[30px] bg-[#0d4c8f] px-6 py-8 text-white shadow-[0_12px_30px_rgba(13,76,143,0.16)]"
                spotlightColor="rgba(255,255,255,0.12)"
              >
                <h3 className="text-[2rem] font-bold leading-tight">
                  Need a Custom
                  <br />
                  Solution?
                </h3>

                <p className="mt-6 text-[15px] leading-8 text-white/80">
                  Our team can design a bespoke strategy tailored to your specific
                  industry and market requirements.
                </p>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/contact#book-call"
                    className="block rounded-full bg-white px-5 py-4 text-center text-[15px] font-semibold text-[#0d4c8f]"
                  >
                    <ShinyText
                      text="Speak with an Expert"
                      speed={3}
                      className="text-[#0d4c8f]"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="block rounded-full border border-white/16 bg-white/10 px-5 py-4 text-center text-[15px] font-semibold text-white"
                  >
                    <ShinyText text="Send a Message" speed={3} className="text-white" />
                  </Link>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </section>
        </section>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            key={activeCard.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#0d1b34]/60 backdrop-blur-[3px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[34px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
              onClick={(event) => event.stopPropagation()}
            >
                <motion.button
                  type="button"
                  onClick={closeModal}
                  whileHover={{ scale: 1.06, rotate: 90 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.4rem] text-[#22304a] shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
                >
                  ×
                </motion.button>

              <div className="relative h-[240px] overflow-hidden rounded-t-[34px]">
                <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeCard.imageSrc}
                    alt={activeCard.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.10),rgba(7,27,53,0.45))]" />

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1, duration: 0.28, ease: "easeOut" }}
                  className="absolute left-6 bottom-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0d4c8f] text-white shadow">
                    {activeCard.icon}
                  </div>

                  <h3 className="mt-4 text-[1.9rem] font-bold text-white">
                    {activeCard.title}
                  </h3>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.08,
                    },
                  },
                }}
                className="px-6 py-6 md:px-8 md:py-8"
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="text-[15px] leading-7 text-[#5f6f86]"
                >
                  {activeCard.description}
                </motion.p>

                <div className="mt-5 space-y-3">
                  {activeCard.details.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: 18, scale: 0.98 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{
                        duration: 0.28,
                        ease: "easeOut",
                        delay: index * 0.02,
                      }}
                      whileHover={{ y: -2 }}
                      className="rounded-[22px] bg-[#f6f8fb] px-4 py-3 text-[14px] leading-7 text-[#64748b]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact#book-call"
                      onClick={closeModal}
                      className="inline-block rounded-full bg-[#0d4c8f] px-5 py-3 text-[14px] font-semibold text-white"
                    >
                      <ShinyText text="Book a Call" speed={3} className="text-white" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      onClick={closeModal}
                      className="inline-block rounded-full border border-[#d7dee9] bg-white px-5 py-3 text-[14px] font-semibold text-[#22304a]"
                    >
                      <ShinyText text="Contact Us" speed={3} className="text-[#22304a]" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
