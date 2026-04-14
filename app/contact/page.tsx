"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import ShinyText from "@/components/reactbits/ShinyText";
import FadeContent from "@/components/reactbits/FadeContent";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

type FormMode = "message" | "call";

type SubmitState = {
  loading: boolean;
  success: string;
  error: string;
};

const initialSubmitState: SubmitState = {
  loading: false,
  success: "",
  error: "",
};

const OFFICE_MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=1385+Midland+Ave,+Toronto,+ON,+Canada";

export default function ContactPage() {
  const pathname = usePathname();
  const [formMode, setFormMode] = useState<FormMode>("message");
  const [submitState, setSubmitState] = useState<SubmitState>(initialSubmitState);

  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [callForm, setCallForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    preferredDate: "",
    preferredTime: "9:00 AM",
  });

  useEffect(() => {
    if (pathname !== "/contact") return;

    const scrollBookCallFormIntoView = () => {
      window.setTimeout(() => {
        const wide = window.matchMedia("(min-width: 1024px)").matches;
        const target = wide
          ? document.getElementById("contact-form-panel-desktop")
          : document.getElementById("contact-form-panel-mobile");
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        target?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
      }, 160);
    };

    const syncBookCallFromHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash !== "#book-call") return;
      setFormMode("call");
      scrollBookCallFormIntoView();
    };

    syncBookCallFromHash();
    window.addEventListener("hashchange", syncBookCallFromHash);
    return () => window.removeEventListener("hashchange", syncBookCallFromHash);
  }, [pathname]);

  const resetFeedback = () => {
    setSubmitState((prev) => ({
      ...prev,
      success: "",
      error: "",
    }));
  };

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFeedback();
    setSubmitState({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "message",
          ...messageForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your inquiry.");
      }

      setSubmitState({
        loading: false,
        success: "Your message has been sent successfully.",
        error: "",
      });

      setMessageForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your inquiry.",
      });
    }
  };

  const handleCallSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFeedback();
    setSubmitState({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "call",
          ...callForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit your booking request.");
      }

      setSubmitState({
        loading: false,
        success: "Your booking request has been submitted successfully.",
        error: "",
      });

      setCallForm({
        name: "",
        email: "",
        company: "",
        reason: "",
        preferredDate: "",
        preferredTime: "9:00 AM",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your booking request.",
      });
    }
  };

  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      {/* DESKTOP / TABLET */}
      <div className="hidden lg:block">
        <section className="bg-[#f3f4f6] pt-2">
          <div className="mx-auto w-[92%] max-w-7xl xl:w-[88%]">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[34px] bg-[#0d4c8f] lg:min-h-[27rem] xl:min-h-[30rem]">
              <div className="absolute inset-0">
                <Image
                  src="/images/contact/contact-hero.jpg"
                  alt="Contact GlobalFlow Trading"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,63,0.86),rgba(5,31,63,0.58))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(255,255,255,0.08),transparent_34%)]" />
              <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute left-[10%] top-1/3 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

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
                  <div className="max-w-2xl">
                    <FadeContent blur duration={700} easing="ease-out" initialOpacity={0}>
                      <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-sm">
                        Contact GlobalFlow
                      </p>
                    </FadeContent>

                    <div className="mt-4">
                      <BlurText
                        text="Connect With Our Specialists"
                        delay={120}
                        animateBy="words"
                        direction="top"
                        className="text-4xl font-bold leading-tight text-white xl:text-6xl"
                      />
                    </div>

                    <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
                      <p className="mt-6 max-w-xl text-[16px] leading-8 text-white/85">
                        If you are interested in working with GlobalFlow Trading Inc. or
                        would like more information about our services and products,
                        please contact us using the form below.
                      </p>
                    </FadeContent>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[92%] max-w-7xl py-14 xl:w-[88%] lg:py-16">
          <div className="grid gap-8 xl:grid-cols-[1.8fr_0.95fr]">
            <AnimatedContent
              id="contact-form-panel-desktop"
              className="h-full scroll-mt-28"
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
                className="flex h-full flex-col rounded-[32px] border border-[#e5e8ee] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                spotlightColor="rgba(13,76,143,0.14)"
              >
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormMode("message");
                      resetFeedback();
                    }}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition duration-300 ${
                      formMode === "message"
                        ? "bg-[#0d4c8f] text-white shadow-[0_8px_20px_rgba(13,76,143,0.25)]"
                        : "border border-[#d8dee8] bg-white text-[#46546d] hover:border-[#bfd0e6] hover:bg-[#f8fbff]"
                    }`}
                  >
                    <ShinyText
                      text="Send a Message"
                      speed={3}
                      className={formMode === "message" ? "text-white" : "text-[#46546d]"}
                    />
                  </button>

                  <button
                    id="book-call"
                    type="button"
                    onClick={() => {
                      setFormMode("call");
                      resetFeedback();
                      if (typeof window !== "undefined") {
                        window.history.replaceState(null, "", "/contact#book-call");
                      }
                    }}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition duration-300 ${
                      formMode === "call"
                        ? "bg-[#0d4c8f] text-white shadow-[0_8px_20px_rgba(13,76,143,0.25)]"
                        : "border border-[#d8dee8] bg-white text-[#46546d] hover:border-[#bfd0e6] hover:bg-[#f8fbff]"
                    }`}
                  >
                    <ShinyText
                      text="Book a Call"
                      speed={3}
                      className={formMode === "call" ? "text-white" : "text-[#46546d]"}
                    />
                  </button>
                </div>

                <div className="mt-8">
                  <h2 className="text-[1.65rem] font-semibold text-[#16233e]">
                    {formMode === "message"
                      ? "Direct Inquiry"
                      : "Schedule a Consultation"}
                  </h2>

                  <p className="mt-2 text-[14px] leading-7 text-[#6b7890]">
                    {formMode === "message"
                      ? "Tell us about your sourcing, logistics, or import-export needs and our team will direct your inquiry to the right specialist."
                      : "Choose a convenient time to speak with our team about your sourcing, logistics, or trade requirements."}
                  </p>
                </div>

                {submitState.success ? (
                  <div className="mt-6 rounded-[22px] border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                    {submitState.success}
                  </div>
                ) : null}

                {submitState.error ? (
                  <div className="mt-6 rounded-[22px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700 break-words">
                    {submitState.error}
                  </div>
                ) : null}

                {formMode === "message" ? (
                  <form className="mt-8 flex flex-1 flex-col" onSubmit={handleMessageSubmit}>
                    <div className="space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={messageForm.name}
                            onChange={(e) =>
                              setMessageForm((prev) => ({ ...prev, name: e.target.value }))
                            }
                            placeholder="Your full name"
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={messageForm.email}
                            onChange={(e) =>
                              setMessageForm((prev) => ({ ...prev, email: e.target.value }))
                            }
                            placeholder="email@company.com"
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={messageForm.company}
                          onChange={(e) =>
                            setMessageForm((prev) => ({ ...prev, company: e.target.value }))
                          }
                          placeholder="Your Organization"
                          className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Message
                        </label>
                        <textarea
                          rows={6}
                          required
                          value={messageForm.message}
                          onChange={(e) =>
                            setMessageForm((prev) => ({ ...prev, message: e.target.value }))
                          }
                          placeholder="How can we help you?"
                          className="w-full rounded-[24px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                        />
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="mb-3 text-[12px] leading-6 text-[#70809a]">
                        We typically respond within 1 business day and your inquiry is
                        reviewed by the right GlobalFlow specialist.
                      </p>
                      <button
                        type="submit"
                        disabled={submitState.loading}
                        className="rounded-full bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(13,76,143,0.25)] transition duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <ShinyText
                          text={submitState.loading ? "Sending..." : "Send Inquiry"}
                          speed={3}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form>
                ) : (
                  <form className="mt-8 flex flex-1 flex-col" onSubmit={handleCallSubmit}>
                    <div className="space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={callForm.name}
                            onChange={(e) =>
                              setCallForm((prev) => ({ ...prev, name: e.target.value }))
                            }
                            placeholder="John Doe"
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={callForm.email}
                            onChange={(e) =>
                              setCallForm((prev) => ({ ...prev, email: e.target.value }))
                            }
                            placeholder="email@company.com"
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={callForm.company}
                          onChange={(e) =>
                            setCallForm((prev) => ({ ...prev, company: e.target.value }))
                          }
                          placeholder="Your Organization"
                          className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Reason for Booking
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={callForm.reason}
                          onChange={(e) =>
                            setCallForm((prev) => ({ ...prev, reason: e.target.value }))
                          }
                          placeholder="Tell us the purpose of the meeting"
                          className="w-full rounded-[24px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                        />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            required
                            value={callForm.preferredDate}
                            onChange={(e) =>
                              setCallForm((prev) => ({
                                ...prev,
                                preferredDate: e.target.value,
                              }))
                            }
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                            Preferred Time
                          </label>
                          <select
                            value={callForm.preferredTime}
                            onChange={(e) =>
                              setCallForm((prev) => ({
                                ...prev,
                                preferredTime: e.target.value,
                              }))
                            }
                            className="w-full rounded-[20px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                          >
                            <option>9:00 AM</option>
                            <option>11:00 AM</option>
                            <option>1:00 PM</option>
                            <option>3:00 PM</option>
                            <option>5:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="mb-3 text-[12px] leading-6 text-[#70809a]">
                        We usually confirm consultation requests within 1 business day
                        so your meeting can be scheduled without delay.
                      </p>
                      <button
                        type="submit"
                        disabled={submitState.loading}
                        className="rounded-full bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(13,76,143,0.25)] transition duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <ShinyText
                          text={submitState.loading ? "Submitting..." : "Schedule Call"}
                          speed={3}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form>
                )}
              </SpotlightCard>
            </AnimatedContent>

            <aside className="space-y-6">
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
                <SpotlightCard
                  className="rounded-[30px] border border-[#d7e4f4] bg-[linear-gradient(180deg,#f3f8ff_0%,#e8f1fb_100%)] p-6 shadow-[0_12px_28px_rgba(13,76,143,0.08)]"
                  spotlightColor="rgba(13,76,143,0.12)"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#0d4c8f] text-white shadow-[0_10px_20px_rgba(13,76,143,0.18)]">
                      ◔
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7090]">
                        Efficiency
                      </p>
                      <h3 className="mt-1 text-[1.2rem] font-semibold text-[#16233e]">
                        Response Time
                      </h3>
                      <p className="mt-3 text-[14px] leading-7 text-[#556884]">
                        We review inquiries promptly and connect each request with
                        the right GlobalFlow contact for faster follow-up.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>

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
                  className="rounded-[30px] border border-[#e8edf4] bg-white p-6 shadow-[0_6px_14px_rgba(0,0,0,0.03)]"
                  spotlightColor="rgba(13,76,143,0.12)"
                >
                  <h3 className="border-l-[3px] border-[#0d4c8f] pl-3 text-[1.1rem] font-semibold text-[#16233e]">
                    Contact Information
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                        Email Us
                      </p>
                      <p className="mt-1 text-[14px] text-[#23324d]">
                        info@globalflowtrading.com
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                        Phone
                      </p>
                      <p className="mt-1 text-[14px] text-[#23324d]">
                        +1 (416) 254-0593
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>

              <AnimatedContent
                distance={45}
                direction="vertical"
                reverse={false}
                duration={0.85}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.98}
                threshold={0.15}
              >
                <a
                  href={OFFICE_MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-[30px] border border-[#e5e8ee] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-[240px] overflow-hidden rounded-t-[30px]">
                    <Image
                      src="/images/contact/contact-office.jpg"
                      alt="GlobalFlow Trading office location"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.35))]" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[12px] font-medium text-[#23324d] shadow-sm backdrop-blur">
                      1385 Midland Ave, Toronto
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-[13px] font-semibold text-[#23324d]">
                        GlobalFlow Trading Inc.
                      </p>
                      <p className="mt-1 text-[12px] text-[#728199]">
                        Toronto, Ontario, Canada
                      </p>
                    </div>

                    <span className="text-[12px] font-semibold text-[#0d4c8f]">
                      <ShinyText text="Open Map" speed={3} className="text-[#0d4c8f]" />
                    </span>
                  </div>
                </a>
              </AnimatedContent>
            </aside>
          </div>
        </section>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden">
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
            <div className="relative overflow-hidden rounded-[28px] bg-[#0d4c8f] shadow-[0_12px_30px_rgba(13,76,143,0.18)]">
              <div className="absolute inset-0">
                <Image
                  src="/images/contact/contact-mobile-hero.jpg"
                  alt="GlobalFlow contact mobile hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.18),rgba(7,27,53,0.72))]" />
              <div className="relative px-5 py-8">
                <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                  Contact GlobalFlow
                </p>

                <div className="mt-4">
                  <BlurText
                    text="Connect With Our Specialists"
                    delay={110}
                    animateBy="words"
                    direction="top"
                    className="text-[2rem] font-bold leading-tight text-white"
                  />
                </div>

                <p className="mt-3 text-[14px] leading-6 text-white/85">
                  If you are interested in working with GlobalFlow Trading Inc. or
                  would like more information about our services and products,
                  please contact us using the form below.
                </p>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            id="contact-form-panel-mobile"
            className="scroll-mt-28"
            distance={35}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <div className="mt-6 rounded-[28px] border border-[#e5e8ee] bg-white p-5 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFormMode("message");
                    resetFeedback();
                  }}
                  className={`rounded-full px-4 py-2 text-[12px] font-semibold transition duration-300 ${
                    formMode === "message"
                      ? "bg-[#0d4c8f] text-white shadow-[0_8px_20px_rgba(13,76,143,0.2)]"
                      : "border border-[#d8dee8] bg-white text-[#46546d]"
                  }`}
                >
                  <ShinyText
                    text="Message"
                    speed={3}
                    className={formMode === "message" ? "text-white" : "text-[#46546d]"}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormMode("call");
                    resetFeedback();
                    if (typeof window !== "undefined") {
                      window.history.replaceState(null, "", "/contact#book-call");
                    }
                  }}
                  className={`rounded-full px-4 py-2 text-[12px] font-semibold transition duration-300 ${
                    formMode === "call"
                      ? "bg-[#0d4c8f] text-white shadow-[0_8px_20px_rgba(13,76,143,0.2)]"
                      : "border border-[#d8dee8] bg-white text-[#46546d]"
                  }`}
                >
                  <ShinyText
                    text="Book a Call"
                    speed={3}
                    className={formMode === "call" ? "text-white" : "text-[#46546d]"}
                  />
                </button>
              </div>

              {submitState.success ? (
                <div className="mt-4 rounded-[20px] border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                  {submitState.success}
                </div>
              ) : null}

              {submitState.error ? (
                <div className="mt-4 rounded-[20px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700 break-words">
                  {submitState.error}
                </div>
              ) : null}

              {formMode === "message" ? (
                <form className="mt-6 space-y-4" onSubmit={handleMessageSubmit}>
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={messageForm.name}
                      onChange={(e) =>
                        setMessageForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="John Doe"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={messageForm.email}
                      onChange={(e) =>
                        setMessageForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="john@globalflow.com"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={messageForm.company}
                      onChange={(e) =>
                        setMessageForm((prev) => ({ ...prev, company: e.target.value }))
                      }
                      placeholder="Your Company"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={messageForm.message}
                      onChange={(e) =>
                        setMessageForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="How can we help you today?"
                      className="w-full rounded-[22px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState.loading}
                    className="w-full rounded-full bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(13,76,143,0.25)] transition duration-300 disabled:opacity-60"
                  >
                    <ShinyText
                      text={submitState.loading ? "Sending..." : "Send Message"}
                      speed={3}
                      className="text-white"
                    />
                  </button>
                </form>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleCallSubmit}>
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={callForm.name}
                      onChange={(e) =>
                        setCallForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="John Doe"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={callForm.email}
                      onChange={(e) =>
                        setCallForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="john@globalflow.com"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={callForm.company}
                      onChange={(e) =>
                        setCallForm((prev) => ({ ...prev, company: e.target.value }))
                      }
                      placeholder="Your Company"
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Reason for Booking
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={callForm.reason}
                      onChange={(e) =>
                        setCallForm((prev) => ({ ...prev, reason: e.target.value }))
                      }
                      placeholder="Reason for booking"
                      className="w-full rounded-[22px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={callForm.preferredDate}
                      onChange={(e) =>
                        setCallForm((prev) => ({
                          ...prev,
                          preferredDate: e.target.value,
                        }))
                      }
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Preferred Time
                    </label>
                    <select
                      value={callForm.preferredTime}
                      onChange={(e) =>
                        setCallForm((prev) => ({
                          ...prev,
                          preferredTime: e.target.value,
                        }))
                      }
                      className="w-full rounded-[18px] border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition duration-300 focus:border-[#0d4c8f] focus:shadow-[0_0_0_4px_rgba(13,76,143,0.08)]"
                    >
                      <option>9:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>3:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitState.loading}
                    className="w-full rounded-full bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(13,76,143,0.25)] transition duration-300 disabled:opacity-60"
                  >
                    <ShinyText
                      text={submitState.loading ? "Submitting..." : "Schedule Call"}
                      speed={3}
                      className="text-white"
                    />
                  </button>
                </form>
              )}
            </div>
          </AnimatedContent>

          <section className="mt-6 space-y-4">
            <AnimatedContent
              distance={35}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <a
                href={OFFICE_MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-[28px] border border-[#e5e8ee] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.03)]"
              >
                <div className="relative h-[170px]">
                  <Image
                    src="/images/contact/contact-office.jpg"
                    alt="GlobalFlow office location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.35))]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[20px] bg-white/92 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-[13px] font-semibold text-[#23324d]">
                      Toronto Office
                    </p>
                    <p className="mt-1 text-[12px] text-[#728199]">
                      1385 Midland Ave, Toronto
                    </p>
                  </div>
                </div>
              </a>
            </AnimatedContent>

            <AnimatedContent
              distance={28}
              direction="vertical"
              reverse={false}
              duration={0.75}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <div className="rounded-[24px] border border-[#e5e8ee] bg-white p-4 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                  Email Us
                </p>
                <p className="mt-1 text-[14px] text-[#23324d]">
                  info@globalflowtrading.com
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={28}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
            >
              <div className="rounded-[24px] border border-[#e5e8ee] bg-white p-4 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                  Call Us
                </p>
                <p className="mt-1 text-[14px] text-[#23324d]">
                  +1 (416) 254-0593
                </p>
              </div>
            </AnimatedContent>
          </section>
        </section>
      </div>
    </main>
  );
}
