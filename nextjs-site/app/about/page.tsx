"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Star } from "lucide-react";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BorderGlow from "@/components/reactbits/BorderGlow";
import BlurText from "@/components/reactbits/BlurText";
import CountUp from "@/components/reactbits/CountUp";
import FadeContent from "@/components/reactbits/FadeContent";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const companyStats = [
  { value: 25, suffix: "+", label: "Trusted supplier relationships" },
  { value: 80, suffix: "+", label: "Trade projects supported" },
  { value: 2.4, suffix: "K", label: "Documents coordinated" },
];

const pillars = [
  {
    title: "Our Vision",
    description:
      "To become the trusted bridge between businesses and dependable trade opportunities across global markets.",
  },
  {
    title: "Our Mission",
    description:
      "To simplify sourcing, logistics, and trade coordination with clear guidance and reliable execution.",
  },
];

const capabilities = [
  {
    icon: "01",
    title: "Product Sourcing",
    href: "/services#global-sourcing",
    description:
      "We help businesses identify reliable suppliers and evaluate options with greater confidence.",
  },
  {
    icon: "02",
    title: "Trade Documentation",
    href: "/services#compliance-documentation",
    description:
      "Our coordination keeps shipping paperwork, customs files, and trade records organized and moving.",
  },
  {
    icon: "03",
    title: "Shipment Coordination",
    href: "/services#logistics-freight",
    description:
      "We support communication across suppliers, freight partners, and receiving teams to reduce delays.",
  },
  {
    icon: "04",
    title: "Market Guidance",
    href: "/services#import-export",
    description:
      "We provide practical trade support for businesses expanding into new regions and supply networks.",
  },
];

const markets = ["North America", "South America", "Europe", "Middle East"];

const compliancePoints = [
  "Strict Anti-Bribery and Corruption (ABC) Protocols",
  "Environmental Stewardship in Logistics",
  "Transparent Supply Chain Reporting",
  "Full ISO 9001:2015 Certification",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] pt-20 text-[#13213d]">
      <section className="bg-[#f3f4f6] pt-2">
        <div className="mx-auto w-[92%] max-w-7xl xl:w-[88%]">
          <div className="relative overflow-hidden rounded-[34px] bg-[#0b3f78]">
            <div className="absolute inset-0">
              <Image
                src="/images/aboutus/About-Us-Hero-Desktop.jpg"
                alt="GlobalFlow global trade network"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(5,28,57,0.9),rgba(9,54,104,0.62))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(255,255,255,0.12),transparent_32%)]" />

            <div className="relative px-6 py-14 sm:px-8 lg:px-10 lg:py-18 xl:px-12 xl:py-20">
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
                  <FadeContent
                    blur
                    duration={700}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-sm">
                      About GlobalFlow
                    </p>
                  </FadeContent>

                  <div className="mt-5">
                    <BlurText
                      text="Pioneering Global Trade Excellence"
                      delay={120}
                      animateBy="words"
                      direction="top"
                      className="max-w-3xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl xl:text-6xl"
                    />
                  </div>

                  <FadeContent
                    blur
                    duration={900}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/84 sm:text-[16px]">
                      Connecting businesses to sourcing, logistics, and global
                      trade opportunities with practical coordination and
                      dependable support.
                    </p>
                  </FadeContent>

                  <FadeContent
                    blur
                    duration={1050}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <div className="mt-8 flex flex-wrap gap-3">
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                        <ShinyText
                          text="Strategy-led"
                          speed={3}
                          className="text-[12px] font-semibold uppercase tracking-[0.18em]"
                          color="rgba(255,255,255,0.78)"
                          shineColor="#ffffff"
                          spread={140}
                        />
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                        <ShinyText
                          text="Logistics-aware"
                          speed={3.4}
                          className="text-[12px] font-semibold uppercase tracking-[0.18em]"
                          color="rgba(255,255,255,0.78)"
                          shineColor="#ffffff"
                          spread={140}
                        />
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                        <ShinyText
                          text="Partner-focused"
                          speed={3.8}
                          className="text-[12px] font-semibold uppercase tracking-[0.18em]"
                          color="rgba(255,255,255,0.78)"
                          shineColor="#ffffff"
                          spread={140}
                        />
                      </div>
                    </div>
                  </FadeContent>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-10 sm:py-12 xl:w-[88%]">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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
            <SpotlightCard
              className="rounded-[30px] border border-[#e4e8ef] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8"
              spotlightColor="rgba(13,76,143,0.14)"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
                Company Overview
              </p>

              <h2 className="mt-4 text-[1.9rem] font-bold leading-tight text-[#16233e] sm:text-[2.2rem]">
                Trade support built on trust, clarity, and follow-through.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#627089]">
                GlobalFlow Trading Inc. helps businesses manage sourcing,
                documentation, shipment coordination, and global trade workflows
                with a practical approach that keeps every stage easier to
                handle.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {companyStats.map((stat, index) => (
                  <FadeContent
                    key={stat.label}
                    blur
                    duration={700 + index * 120}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <div className="rounded-[22px] border border-[#e8edf4] bg-[#f8fbff] px-4 py-5">
                      <div className="text-3xl font-bold text-[#0d4c8f]">
                        <CountUp to={stat.value} duration={1.8} />
                        <span>{stat.suffix}</span>
                      </div>

                      <p className="mt-2 text-[13px] leading-6 text-[#6b7890]">
                        {stat.label}
                      </p>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </SpotlightCard>
          </AnimatedContent>

          <AnimatedContent
            distance={44}
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
              className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-[#e4e8ef] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              spotlightColor="rgba(255,255,255,0.18)"
            >
              <Image
                src="/images/aboutus/Handshake.jpg"
                alt="Handshake between business partners"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,31,59,0.08),rgba(9,31,59,0.38))]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-white/12 p-5 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
                  Relationship-first approach
                </p>
                <p className="mt-3 text-[15px] leading-7 text-white/88">
                  We focus on dependable communication and steady coordination
                  with every client, supplier, and logistics partner.
                </p>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-[#f3f4f6] py-10 sm:py-12">
        <div className="mx-auto w-[92%] max-w-7xl xl:w-[88%]">
          <div className="rounded-[34px] bg-[linear-gradient(135deg,#0f2f5d,#194783)] px-5 py-6 shadow-[0_24px_60px_rgba(11,35,73,0.18)] sm:rounded-[40px] sm:px-7 sm:py-8 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {pillars.map((pillar, index) => (
                <AnimatedContent
                  key={pillar.title}
                  distance={56}
                  direction={index % 2 === 0 ? "horizontal" : "vertical"}
                  reverse={false}
                  duration={0.9}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={0.95}
                  threshold={0.15}
                  delay={index * 0.08}
                >
                  <BorderGlow
                    className="h-full"
                    glowColor="197 92% 76%"
                    backgroundColor="rgba(121,168,233,0.18)"
                    borderRadius={28}
                    glowRadius={26}
                    glowIntensity={0.6}
                    animated
                    colors={["#8fd3ff", "#f8fbff", "#c7e4ff"]}
                    fillOpacity={0.28}
                  >
                    <SpotlightCard
                      className="group h-full rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(243,248,255,0.94))] p-7 text-[#183153] shadow-[0_18px_36px_rgba(8,35,71,0.16)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_42px_rgba(8,35,71,0.22)]"
                      spotlightColor="rgba(116, 189, 255, 0.24)"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#dceafe] text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1b4f86] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                        {index === 0 ? "V" : "M"}
                      </div>

                      <h3 className="mt-5 text-[1.6rem] font-semibold text-[#162a46] transition duration-500 group-hover:translate-x-1">
                        {pillar.title}
                      </h3>

                      <FadeContent
                        blur
                        duration={750 + index * 120}
                        easing="ease-out"
                        initialOpacity={0}
                      >
                        <p className="mt-4 max-w-md text-[15px] leading-8 text-[#526887]">
                          {pillar.description}
                        </p>
                      </FadeContent>
                    </SpotlightCard>
                  </BorderGlow>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-12 sm:py-14 xl:w-[88%]">
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
          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
              What We Do
            </p>

            <h2 className="mt-4 text-[1.95rem] font-bold text-[#16233e] sm:text-[2.35rem]">
              Coordinated support for every stage of trade.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#627089]">
              We bring sourcing, documentation, and shipment execution into one
              clear workflow so businesses can move faster with fewer surprises.
            </p>
          </div>
        </AnimatedContent>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <AnimatedContent
              key={capability.title}
              distance={52}
              direction={index % 2 === 0 ? "vertical" : "horizontal"}
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.94}
              threshold={0.15}
              delay={index * 0.06}
            >
              <BorderGlow
                className="h-full"
                glowColor="212 85% 74%"
                backgroundColor="rgba(255,255,255,0.85)"
                borderRadius={28}
                glowRadius={22}
                glowIntensity={0.35}
                animated={index % 2 === 0}
                colors={["#d7e8ff", "#8dbdff", "#ffffff"]}
                fillOpacity={0.15}
              >
                <SpotlightCard
                  className="group h-full rounded-[28px] border border-[#e5e8ee] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_38px_rgba(10,49,94,0.16)]"
                  spotlightColor="rgba(13,76,143,0.12)"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#edf5ff] text-[13px] font-semibold text-[#0d4c8f] transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {capability.icon}
                  </div>

                  <h3 className="mt-5 text-[1.15rem] font-semibold text-[#1a2740] transition-colors duration-300 group-hover:text-[#0d4c8f]">
                    {capability.title}
                  </h3>

                  <FadeContent
                    blur
                    duration={700}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <p className="mt-4 text-[14px] leading-7 text-[#6b7890]">
                      {capability.description}
                    </p>
                  </FadeContent>

                  <div className="mt-6">
                    <Link
                      href={capability.href}
                      className="inline-flex items-center rounded-full border border-[#dbe2ec] bg-[#f7f9fc] px-4 py-2.5 text-[13px] font-semibold text-[#0d4c8f] transition duration-500 hover:border-[#bfd0e6] hover:bg-[#eef5fd] group-hover:translate-x-1"
                    >
                      <ShinyText
                        text="Learn More"
                        speed={3}
                        className="text-[13px] font-semibold"
                        color="#0d4c8f"
                        shineColor="#5b8cff"
                        spread={140}
                      />
                    </Link>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl pb-12 xl:w-[88%]">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.15}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-[#dfe6ef] bg-[#0e3157] shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0">
              <Image
                src="/images/aboutus/globe-image.jpg"
                alt="Global trade map visualization"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,46,0.22),rgba(8,24,46,0.12))]" />

            <div className="relative flex min-h-[300px] items-center justify-center px-6 py-10 sm:min-h-[360px] sm:px-8">
              <BorderGlow
                className="max-w-md"
                glowColor="210 90% 78%"
                backgroundColor="rgba(255,255,255,0.12)"
                borderRadius={24}
                glowRadius={20}
                glowIntensity={0.38}
                colors={["#a8d9ff", "#ffffff", "#6bc7ff"]}
                fillOpacity={0.2}
              >
                <div className="rounded-[24px] border border-white/30 bg-white/82 p-5 text-center shadow-[0_16px_30px_rgba(17,57,102,0.12)] backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#67809a]">
                    Global trade network
                  </p>

                  <h3 className="mt-3 text-[1.25rem] font-semibold text-[#173053]">
                    Connecting suppliers, logistics partners, and growth-focused
                    businesses worldwide.
                  </h3>
                </div>
              </BorderGlow>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-4 pb-12 xl:w-[88%]">
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
          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
              Markets We Serve
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold text-[#16233e] sm:text-[2.2rem]">
              Built for cross-market coordination.
            </h2>
          </div>
        </AnimatedContent>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {markets.map((market, index) => (
            <AnimatedContent
              key={market}
              distance={46}
              direction={index % 2 === 0 ? "horizontal" : "vertical"}
              reverse={false}
              duration={0.85}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.15}
              delay={index * 0.05}
            >
              <BorderGlow
                className="h-full"
                glowColor="212 82% 76%"
                backgroundColor="#ffffff"
                borderRadius={22}
                glowRadius={18}
                glowIntensity={0.28}
                animated
                colors={["#cfe4ff", "#ffffff", "#8dbdff"]}
                fillOpacity={0.1}
              >
                <SpotlightCard
                  className="h-full rounded-[22px] border border-[#dfe5ee] bg-white px-5 py-4 text-center text-[14px] font-semibold text-[#223450] shadow-[0_8px_18px_rgba(0,0,0,0.03)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_14px_24px_rgba(10,49,94,0.14)] hover:text-[#0d4c8f]"
                  spotlightColor="rgba(13,76,143,0.12)"
                >
                  <ShinyText
                    text={market}
                    speed={3.4}
                    className="text-[14px] font-semibold"
                    color="#223450"
                    shineColor="#4e8fff"
                    spread={120}
                  />
                </SpotlightCard>
              </BorderGlow>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl pb-16 xl:w-[88%]">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedContent
            distance={40}
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
              className="rounded-[30px] border border-[#e3e8ef] bg-[#eef3f9] p-7 shadow-[0_12px_28px_rgba(0,0,0,0.04)] sm:p-8"
              spotlightColor="rgba(13,76,143,0.1)"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
                Ethical & Compliance-Driven Approach
              </p>

              <h2 className="mt-4 text-[1.85rem] font-bold text-[#16233e] sm:text-[2.15rem]">
                Ethical & Compliance-Driven
                <br />
                Approach
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#627089]">
                We operate under a rigorous framework of international trade
                laws. Our compliance department ensures every partner, route,
                and product meets the highest standards of safety and ethics.
              </p>

              <div className="mt-7 space-y-4">
                {compliancePoints.map((point, index) => (
                  <AnimatedContent
                    key={point}
                    distance={24}
                    direction="vertical"
                    reverse={false}
                    duration={0.55}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={0.98}
                    threshold={0.15}
                    delay={index * 0.05}
                  >
                    <div className="group flex items-start gap-3 rounded-[18px] bg-white px-4 py-4 text-[14px] leading-7 text-[#42516a] shadow-[0_8px_16px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(9,45,88,0.12)]">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#edf5ff] text-[#0d4c8f] transition duration-300 group-hover:scale-110">
                        {index === 0 ? (
                          <ShieldCheck className="h-3.5 w-3.5" />
                        ) : index === 1 ? (
                          <Sparkles className="h-3.5 w-3.5" />
                        ) : index === 2 ? (
                          <Star className="h-3.5 w-3.5" />
                        ) : (
                          <ShieldCheck className="h-3.5 w-3.5" />
                        )}
                      </div>
                      <span>{point}</span>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </SpotlightCard>
          </AnimatedContent>

          <AnimatedContent
            distance={44}
            direction="vertical"
            reverse={false}
            duration={0.85}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <BorderGlow
              className="h-full"
              glowColor="212 78% 78%"
              backgroundColor="#ffffff"
              borderRadius={30}
              glowRadius={24}
              glowIntensity={0.42}
              animated
              colors={["#d7e8ff", "#8dbdff", "#ffffff"]}
              fillOpacity={0.12}
            >
              <div className="h-full rounded-[30px] border border-[#e4e8ef] bg-white p-7 shadow-[0_12px_28px_rgba(0,0,0,0.04)] sm:p-8">
                <div className="relative h-36 overflow-hidden rounded-[22px] border border-[#e3ebf5] bg-[#edf4fb]">
                  <Image
                    src="/images/aboutus/integrity.png"
                    alt="Integrity and ethics"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,25,49,0.08),rgba(7,25,49,0.2))]" />
                </div>

                <h3 className="mt-6 text-[1.75rem] font-semibold text-[#16233e]">
                  Integrity in Action
                </h3>

                <p className="mt-4 text-[14px] leading-8 text-[#66748c]">
                  Our zero-tolerance policy for unethical labor practices
                  ensures that our growth never comes at the cost of human
                  dignity. We conduct bi-annual audits of all tier-1 and tier-2
                  suppliers.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0d4c8f] transition hover:text-[#0b3f78]"
                >
                  <ShinyText
                    text="Learn About Our Ethics Report"
                    speed={3.2}
                    className="text-[15px] font-semibold"
                    color="#0d4c8f"
                    shineColor="#5b8cff"
                    spread={140}
                  />
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </BorderGlow>
          </AnimatedContent>
        </div>
      </section>
    </main>
  );
}
