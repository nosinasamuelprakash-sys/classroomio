"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const PLANS = {
  BASIC: {
    NAME: "Basic",
    DESCRIPTION: "Free tier plan for personal use, no credit card required.",
    PRICE: { MONTHLY: "0", YEARLY: "0" },
    FEATURES: [
      "Unlimited Courses",
      "Unlimited Q/A",
      "20 Students",
      "AI Course Builder (no video upload)",
      "ClassroomIO branding",
    ],
    CTA: { LABEL: "Signup Now", LINK: "https://app.classroomio.com/signup?plan=free" },
  },
  EARLY_ADOPTER: {
    NAME: "Early Adopters",
    DESCRIPTION: "For fast growing teaching businesses that aim to scale.",
    PRICE: { MONTHLY: "35", YEARLY: "350" },
    FEATURES: [
      "Everything in Basic",
      "Unlimited Collaborators",
      "10K Students",
      "Advanced AI Course Builder (Video upload & Certificate)",
      "Custom Branding",
      "Slack Invite",
      "Includes all upcoming features",
    ],
    CTA: { LABEL: "I want in", LINK: "https://app.classroomio.com/signup?plan=early-adopter" },
  },
  ENTERPRISE: {
    NAME: "Enterprise",
    DESCRIPTION: "Best suited for larger businesses that need more control.",
    FEATURES: [
      "Everything in Early Adopters plus:",
      "Unlimited students",
      "Custom Domain",
      "24/7 Support",
    ],
    CTA: { LABEL: "Contact Us", LINK: "https://cal.com/classroomio/enterprise" },
  },
};

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 flex flex-col items-center gap-2">
          <span>There is room for</span>
          <span className="text-[#0233BD]">Everyone.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          You get a customizable LMS, AI integration for productive educators and many more...
        </p>

        <div className="mt-8 inline-flex items-center rounded-full border-2 border-gray-200 p-1 gap-1">
          <button
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
              !isYearly ? "bg-[#0233BD] text-white shadow-sm" : "text-gray-500"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
              isYearly ? "bg-[#0233BD] text-white shadow-sm" : "text-gray-500"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Annually
          </button>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full">
            Save 2 months
          </span>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 flex flex-col">
            <p className="text-xl font-semibold text-gray-900">{PLANS.BASIC.NAME}</p>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">{PLANS.BASIC.DESCRIPTION}</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold">${PLANS.BASIC.PRICE.MONTHLY}</span>
              <p className="text-sm text-gray-500 mt-1">Free forever</p>
            </div>
            <Link
              href={PLANS.BASIC.CTA.LINK}
              target="_blank"
              className="mt-8 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              {PLANS.BASIC.CTA.LABEL}
            </Link>
            <ul className="mt-8 space-y-3 flex-1">
              {PLANS.BASIC.FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check size={17} className="text-[#0233BD] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="cio-bg-blue rounded-3xl p-8 flex flex-col lg:scale-[1.02] shadow-2xl">
            <p className="text-xl font-semibold text-white">{PLANS.EARLY_ADOPTER.NAME}</p>
            <p className="mt-3 text-sm text-blue-200 leading-relaxed">{PLANS.EARLY_ADOPTER.DESCRIPTION}</p>
            <div className="mt-6">
              <span className="text-4xl font-semibold text-white">
                ${isYearly ? PLANS.EARLY_ADOPTER.PRICE.YEARLY : PLANS.EARLY_ADOPTER.PRICE.MONTHLY}
              </span>
              <p className="text-sm text-blue-200 mt-1">per {isYearly ? "year" : "month"}</p>
            </div>
            <Link
              href={PLANS.EARLY_ADOPTER.CTA.LINK}
              target="_blank"
              className="mt-8 block w-full rounded-xl bg-white py-3 text-center text-sm font-semibold text-slate-900 hover:bg-blue-50 transition-colors"
            >
              {PLANS.EARLY_ADOPTER.CTA.LABEL}
            </Link>
            <ul className="mt-8 space-y-3 flex-1">
              {PLANS.EARLY_ADOPTER.FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-blue-100">
                  <Check size={17} className="text-white shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-8 ring-1 ring-gray-200 flex flex-col">
            <p className="text-xl font-semibold text-gray-900">{PLANS.ENTERPRISE.NAME}</p>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">{PLANS.ENTERPRISE.DESCRIPTION}</p>
            <div className="mt-6">
              <span className="text-xl font-semibold text-gray-900">Request Pricing</span>
            </div>
            <Link
              href={PLANS.ENTERPRISE.CTA.LINK}
              target="_blank"
              className="mt-8 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              {PLANS.ENTERPRISE.CTA.LABEL}
            </Link>
            <ul className="mt-8 space-y-3 flex-1">
              {PLANS.ENTERPRISE.FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check size={17} className="text-[#0233BD] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0233BD] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Bring your bootcamp vision online</h2>
        <p className="text-blue-200 mb-8">Try before you buy. No credit card required.</p>
        <Link
          href="https://app.classroomio.com/signup"
          target="_blank"
          className="inline-block bg-white text-[#0233BD] font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Sign up for free
        </Link>
      </section>
    </>
  );
}
