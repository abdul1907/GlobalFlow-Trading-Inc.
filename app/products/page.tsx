"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import BorderGlow from "@/components/reactbits/BorderGlow";
import FadeContent from "@/components/reactbits/FadeContent";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const FILTERS = ["All", "Agriculture", "Metals", "Paper", "Custom"];

type ProductCategory = {
  id: string;
  title: string;
  category: "Agriculture" | "Metals" | "Paper" | "Custom";
  description: string;
  highlights: string[];
  specs: string[];
  badge: { label: string; tone: "accent" | "neutral" | "primary" };
  image: string;
  cta: { label: string; href: string };
  keywords: string;
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "agricultural",
    title: "Agricultural Products",
    category: "Agriculture",
    description:
      "GlobalFlow Trading sources premium grains, pulses, oil seeds, and specialty crops from audited growers with traceable supply chains.",
    highlights: ["Yellow peas", "Lentils", "Chickpeas", "Soybeans"],
    specs: ["Moisture targets <=14%", "Flexible bagging & bulk", "Non-GMO & organic sourcing"],
    badge: { label: "Organic & Pulses", tone: "accent" },
    image: "/images/products/agriculture.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=agriculture" },
    keywords: "peas lentils chickpeas soybeans pulses grains agriculture",
  },
  {
    id: "metals",
    title: "Metal Scrap",
    category: "Metals",
    description:
      "Our metals unit supplies ferrous and non-ferrous scrap grades for foundries and mills, with documentation aligned to destination customs.",
    highlights: ["Aluminum scrap", "Copper scrap", "Steel bundles", "Custom blends"],
    specs: ["ISRI compliant grades", "Radiation & moisture testing", "Containerized & break bulk"],
    badge: { label: "Recycling", tone: "primary" },
    image: "/images/products/metal.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=metal-scrap" },
    keywords: "metal scrap recycling aluminum copper steel ferrous non-ferrous",
  },
  {
    id: "paper",
    title: "Paper Products",
    category: "Paper",
    description:
      "GlobalFlow Trading supplies recovered fiber, OCC, and specialty paper grades for mills and converters with steady monthly volumes.",
    highlights: ["OCC", "Mixed paper", "Kraft rolls", "Sustainable sourcing"],
    specs: ["Moisture scanning on load", "Bale & roll programs", "Custom QA reporting"],
    badge: { label: "Recycled", tone: "neutral" },
    image: "/images/products/paper.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=paper-products" },
    keywords: "paper occ recycled fiber kraft rolls recovered pulp sustainable",
  },
  {
    id: "custom",
    title: "Custom Sourcing",
    category: "Custom",
    description:
      "Tailored sourcing strategies for niche industrial inputs, packaging, or private label programs with rapid vendor onboarding.",
    highlights: ["Bespoke projects", "Vendor due diligence", "On-site inspection", "Compliance reporting"],
    specs: ["Flexible MOQs", "Coordinated lab testing", "Dedicated account team"],
    badge: { label: "Bespoke", tone: "primary" },
    image: "/images/products/custom.jpg",
    cta: { label: "Request a Quote", href: "/contact?interest=custom-sourcing" },
    keywords: "custom sourcing bespoke containers packaging private label projects",
  },
];

const LOGISTICS_FEATURES = [
  {
    title: "Standardized Packaging",
    description: "Stretch-wrapped pallets, lined containers, and tamper seals for export-ready loads.",
  },
  {
    title: "Quality Assurance",
    description: "Lot-based inspections, SGS coordination, and digital COA delivery for every shipment.",
  },
  {
    title: "Real-time Tracking",
    description: "Milestone visibility from stuffing to final port arrival with proactive exception alerts.",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PRODUCT_CATEGORIES.filter((product) => {
      const matchesFilter = activeFilter === "All" || product.category === activeFilter;
      const matchesSearch =
        normalizedQuery.length === 0
          ? true
          : `${product.title} ${product.description} ${product.keywords}`
              .toLowerCase()
              .includes(normalizedQuery);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(frameId);
  }, [activeFilter, query]);

  return (
    <main className="products-page">
      <section className="products-hero">
        <AnimatedContent
          className="products-hero__inner"
          distance={52}
          duration={0.8}
          threshold={0.15}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="products-hero__text">
            <FadeContent blur duration={600} easing="ease-out" threshold={0.2}>
              <p className="products-eyebrow">Global Offering</p>
            </FadeContent>
            <div className="mt-2">
              <BlurText
                text="Our Product Categories"
                delay={75}
                animateBy="words"
                direction="top"
                className="text-[clamp(2.6rem,3.4vw,3.4rem)] font-bold leading-tight text-[#0c1e3b]"
              />
            </div>
            <FadeContent blur duration={780} easing="ease-out" threshold={0.12} delay={0.1}>
              <p className="mt-4 text-[#425270]">
                Expert global sourcing and agile supply chain solutions for critical commodities. We connect verified suppliers with global industrial demand through confident quality coordination.
              </p>
            </FadeContent>
            <FadeContent duration={700} easing="ease-out" threshold={0.15} delay={0.12}>
              <div className="hero-pills mt-4">
                <span>Agriculture</span>
                <span>Metals</span>
                <span>Paper</span>
                <span>Logistics</span>
              </div>
            </FadeContent>
          </div>
          <BorderGlow
            className="products-hero__card min-h-0 !border-white/10 p-[1.6rem]"
            backgroundColor="#0d4c8f"
            borderRadius={24}
            glowColor="200 75 70"
            colors={["#38bdf8", "#60a5fa", "#a78bfa"]}
            fillOpacity={0.45}
            animated
          >
            <p className="m-0 text-[0.96rem] leading-[1.7] text-[#f5f8ff]">
              Product inventory: Products are listed for informational purposes. Contact us before sourcing directly for product details, samples, and compliance documentation.
            </p>
          </BorderGlow>
        </AnimatedContent>
      </section>

      <section className="filters-panel">
        <AnimatedContent
          className="filters-panel__track"
          distance={36}
          duration={0.7}
          threshold={0.18}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="filters-panel__search">
            <label htmlFor="products-search" className="sr-only">
              Search products
            </label>
            <input
              id="products-search"
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="filters-panel__pills" role="tablist">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={isActive ? "pill active" : "pill"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </AnimatedContent>
      </section>

      <section className="products-grid" aria-live="polite">
        {filteredProducts.map((product, index) => (
          <AnimatedContent
            key={product.id}
            className="min-w-0"
            distance={42}
            duration={0.72}
            threshold={0.1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={index * 0.07}
          >
            <SpotlightCard
              className="product-card min-w-0"
              spotlightColor="rgba(13, 76, 143, 0.14)"
            >
              <div className="product-card__media">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={640}
                  height={360}
                  priority={product.id === "agricultural"}
                />
                <span className={`product-badge product-badge--${product.badge.tone}`}>
                  {product.badge.label}
                </span>
              </div>
              <div className="product-card__body">
                <div>
                  <p className="product-card__category">{product.category}</p>
                  <h2>{product.title}</h2>
                  <p className="product-card__description">{product.description}</p>
                </div>

                <div className="product-card__details">
                  <div>
                    <h3>Highlights</h3>
                    <ul>
                      {product.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Specifications</h3>
                    <ul>
                      {product.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="product-card__actions">
                  <Link href={product.cta.href} className="btn btn--primary inline-flex items-center justify-center">
                    <ShinyText
                      text={product.cta.label}
                      speed={2.6}
                      className="text-[0.95rem] font-semibold"
                      color="#ffffff"
                      shineColor="#bfdbfe"
                      spread={125}
                    />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}

        {filteredProducts.length === 0 && (
          <AnimatedContent
            className="min-w-0"
            distance={32}
            duration={0.65}
            threshold={0.15}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
          >
            <div className="empty-state">
              <p>No products match your filters. Adjust your search or category.</p>
            </div>
          </AnimatedContent>
        )}
      </section>

      <section className="logistics-panel">
        <AnimatedContent
          className="logistics-panel__inner"
          distance={48}
          duration={0.78}
          threshold={0.12}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
        >
          <div className="logistics-panel__intro">
            <FadeContent blur duration={620} easing="ease-out" threshold={0.18}>
              <p className="products-eyebrow text-[rgba(200,210,230,0.95)]">Global Logistics & Packaging</p>
            </FadeContent>
            <FadeContent duration={720} easing="ease-out" threshold={0.15} delay={0.06}>
              <BlurText
                text="Value-added services built around every shipment."
                delay={70}
                animateBy="words"
                direction="top"
                className="mt-3 text-[clamp(1.85rem,2.5vw,2.35rem)] font-bold leading-snug text-white"
              />
            </FadeContent>
            <FadeContent blur duration={800} easing="ease-out" threshold={0.12} delay={0.1}>
              <p className="mt-4 text-[rgba(246,247,251,0.88)]">
                From inspection to real-time tracking, our logistics desk ensures your cargo is protected, documented, and visible until final delivery.
              </p>
            </FadeContent>
          </div>
          <div className="logistics-panel__grid">
            {LOGISTICS_FEATURES.map((feature) => (
              <SpotlightCard
                key={feature.title}
                className="logistics-card rounded-[24px] border border-white/[0.08] bg-[rgba(255,255,255,0.06)]"
                spotlightColor="rgba(255, 255, 255, 0.14)"
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}
