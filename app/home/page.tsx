"use client";

import Image from "next/image";
import Link from "next/link";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import CountUp from "@/components/reactbits/CountUp";
import FadeContent from "@/components/reactbits/FadeContent";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const companyStats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Clients Served", value: 500, suffix: "+" },
];

const services = [
  {
    title: "Global Sourcing",
    copy:
      "Sourcing the best quality products from reliable suppliers across continents, ensuring cost-effectiveness and compliance.",
    icon: "/images/icon-crate.png",
  },
  {
    title: "Import / Export Coordination",
    copy:
      "Handling complex documentation, customs regulations, and trade compliance to ensure your goods move smoothly across borders.",
    icon: "/images/icon-arrows.png",
  },
  {
    title: "Logistics Support",
    copy:
      "End-to-end transportation solutions including freight forwarding, warehousing, and real-time shipment tracking.",
    icon: "/images/icon-truck.png",
  },
];

const productCategories = [
  {
    title: "Agricultural",
    copy:
      "High-quality grains, seeds, and fresh produce sourced from sustainable global farming partners.",
    image: "/images/product-agriculture.png",
  },
  {
    title: "Metal Scrap",
    copy:
      "Ferrous and non-ferrous metal recycling materials for heavy industry and manufacturing requirements.",
    image: "/images/product-metal.png",
  },
  {
    title: "Paper Products",
    copy:
      "Raw paper rolls, packaging materials, and recycled paper stock for commercial printing and distribution.",
    image: "/images/product-paper.png",
  },
];

const differentiators = [
  {
    title: "Quality",
    copy: "Stringent quality control protocols for every product batch we source.",
    icon: "/images/icon-shield.png",
  },
  {
    title: "Reliability",
    copy: "Timely deliveries and consistent communication throughout the trade process.",
    icon: "/images/icon-handshake.png",
  },
  {
    title: "Global Reach",
    copy: "Extensive network spanning major trading hubs in Asia, Europe, and the Americas.",
    icon: "/images/icon-globe.png",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero section">
        <AnimatedContent
          className="hero__inner"
          distance={55}
          duration={0.85}
          threshold={0.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
        >
          <div className="hero__content">
            <FadeContent blur duration={650} easing="ease-out" threshold={0.2}>
              <p className="eyebrow">GlobalFlow Trading Inc.</p>
            </FadeContent>
            <div className="mt-2">
              <BlurText
                text="Global Trade. Simplified."
                delay={90}
                animateBy="words"
                direction="top"
                className="max-w-xl text-[clamp(2.8rem,4vw,4.2rem)] font-bold leading-[1.1] text-[#0b1e3f]"
              />
            </div>
            <FadeContent blur duration={750} easing="ease-out" threshold={0.15} delay={0.12}>
              <p className="hero__copy mt-4">
                GlobalFlow Trading Inc. connects suppliers and buyers worldwide by
                offering reliable sourcing, international trade coordination, and
                logistics support. Experience seamless cross-border commerce with
                Toronto&apos;s premier trading experts.
              </p>
            </FadeContent>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary inline-flex items-center justify-center gap-1">
                <ShinyText
                  text="Contact Us"
                  speed={2.8}
                  className="text-base font-semibold"
                  color="#ffffff"
                  shineColor="#bfdbfe"
                  spread={130}
                />
              </Link>
              <Link
                href="/services"
                className="btn btn--secondary inline-flex items-center justify-center gap-1"
              >
                <ShinyText
                  text="Our Services"
                  speed={2.8}
                  className="text-base font-semibold"
                  color="#0a3c7d"
                  shineColor="#60a5fa"
                  spread={125}
                />
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <SpotlightCard
                className="block h-full min-h-0 rounded-[inherit] bg-transparent"
                spotlightColor="rgba(255, 255, 255, 0.32)"
              >
                <Image
                  src="/images/hero-ship.png"
                  alt="Bulk cargo ship sailing across the ocean"
                  width={640}
                  height={480}
                  priority
                />

                <div className="hero__floating-card">
                  <span className="floating-card__label">Global Coverage</span>
                  <strong>50+ Countries Connected</strong>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section className="section company-overview">
        <AnimatedContent
          className="company-overview__inner"
          distance={48}
          duration={0.8}
          threshold={0.12}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="company-overview__text">
            <FadeContent duration={700} easing="ease-out" threshold={0.15}>
              <BlurText
                text="Company Overview"
                delay={70}
                animateBy="words"
                direction="top"
                className="mb-4 text-[2.1rem] font-bold text-white"
              />
            </FadeContent>
            <FadeContent blur duration={800} easing="ease-out" threshold={0.12} delay={0.08}>
              <p>
                GlobalFlow Trading Inc. is an international trading company that focuses
                on sourcing products and connecting businesses across global markets. We
                leverage industry expertise to bridge the gap between production and
                demand, ensuring efficiency at every step of the supply chain.
              </p>
            </FadeContent>
          </div>
          <div className="company-overview__stats">
            {companyStats.map((stat) => (
              <SpotlightCard
                key={stat.label}
                className="stat-card text-center"
                spotlightColor="rgba(255, 255, 255, 0.2)"
              >
                <div className="stat-card__value">
                  <CountUp
                    to={stat.value}
                    duration={1.8}
                    className="stat-card__number"
                  />
                  <span className="stat-card__suffix">{stat.suffix}</span>
                </div>
                <p>{stat.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section className="section services">
        <AnimatedContent
          className="w-full"
          distance={44}
          duration={0.75}
          threshold={0.12}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="section-heading">
            <FadeContent duration={680} easing="ease-out" threshold={0.2}>
              <BlurText
                text="Our Core Services"
                delay={65}
                animateBy="words"
                direction="top"
                className="mb-3 justify-center text-[2.3rem] font-bold text-[#0b1e3f]"
              />
            </FadeContent>
            <FadeContent blur duration={720} easing="ease-out" threshold={0.15} delay={0.06}>
              <p>
                Comprehensive trade solutions tailored to meet the dynamic needs of
                global commerce.
              </p>
            </FadeContent>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <SpotlightCard
                key={service.title}
                className="service-card flex h-full flex-col rounded-[22px] border border-[#e2e7f0] bg-white shadow-[0_18px_40px_rgba(13,33,65,0.06)]"
                spotlightColor="rgba(13, 76, 143, 0.14)"
              >
                <div className="service-card__icon">
                  <Image
                    src={service.icon}
                    alt=""
                    width={28}
                    height={28}
                    aria-hidden
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section className="section product-categories">
        <AnimatedContent
          className="w-full"
          distance={44}
          duration={0.75}
          threshold={0.12}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="section-heading">
            <FadeContent duration={680} easing="ease-out" threshold={0.2}>
              <BlurText
                text="Product Categories"
                delay={65}
                animateBy="words"
                direction="top"
                className="mb-3 justify-center text-[2.3rem] font-bold text-[#0b1e3f]"
              />
            </FadeContent>
            <FadeContent blur duration={720} easing="ease-out" threshold={0.15} delay={0.06}>
              <p>Diverse product portfolios for various industry sectors.</p>
            </FadeContent>
          </div>
          <div className="card-grid product-grid">
            {productCategories.map((product) => (
              <SpotlightCard
                key={product.title}
                className="product-card flex flex-col overflow-hidden rounded-[26px] border border-[#e7ecf4] bg-white shadow-[0_18px_45px_rgba(8,22,44,0.07)]"
                spotlightColor="rgba(13, 76, 143, 0.12)"
              >
                <div className="product-card__image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={420}
                    height={260}
                  />
                </div>
                <div className="product-card__body">
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section className="section why-choose">
        <AnimatedContent
          className="why-choose__inner"
          distance={48}
          duration={0.8}
          threshold={0.12}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="section-heading">
            <FadeContent duration={700} easing="ease-out" threshold={0.18}>
              <BlurText
                text="Why Choose GlobalFlow?"
                delay={75}
                animateBy="words"
                direction="top"
                className="mb-3 justify-center text-[2.3rem] font-bold text-white"
              />
            </FadeContent>
            <FadeContent blur duration={780} easing="ease-out" threshold={0.12} delay={0.08}>
              <p className="text-[rgba(245,248,255,0.88)]">
                We orchestrate every detail, pairing strategic insights with
                uncompromising execution so your business can scale internationally.
              </p>
            </FadeContent>
          </div>
          <div className="why-choose__features">
            {differentiators.map((item) => (
              <SpotlightCard
                key={item.title}
                className="feature-card flex gap-4 rounded-[20px] border border-white/[0.06] bg-[rgba(255,255,255,0.05)]"
                spotlightColor="rgba(255, 255, 255, 0.18)"
              >
                <div className="feature-card__icon" aria-hidden>
                  <Image src={item.icon} alt="" width={24} height={24} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}
