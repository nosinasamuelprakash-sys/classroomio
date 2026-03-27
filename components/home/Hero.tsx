"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const names = [
  { label: "Audience", color: "#3ADFEC" },
  { label: "Employees", color: "#BF0696" },
  { label: "Customers", color: "#0233BD" },
  { label: "Students", color: "#9747FF" },
];

const floatingTags = [
  { label: "Collaboration", color: "#3ADFEC", rotate: "rotate-12", side: "left", top: "top-[12%]" },
  { label: "Open Source", color: "#BF0696", rotate: "-rotate-12", side: "right", top: "top-[12%]" },
  { label: "Customizable LMS", color: "#0233BD", rotate: "-rotate-12", side: "left", top: "top-[36%]" },
  { label: "AI Support", color: "#9747FF", rotate: "rotate-12", side: "right", top: "top-[36%]" },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    const interval = setInterval(() => {
      setTitleIndex((i) => (names[i + 1] ? i + 1 : 0));
    }, 3000);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-bg relative border-b-2 border-gray-200 text-center mt-[72px] w-full overflow-hidden">
      <div className="pt-20 pb-0 w-full">
        <div className="mb-8 flex w-full items-center justify-start lg:justify-center pl-6 lg:pl-0">
          <a
            href="https://github.com/classroomio/classroomio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#C2D2FF] px-4 py-1 text-sm font-medium bg-[#DCE5FF] text-[#4B5563] hover:underline"
          >
            We are <span className="text-blue-700">100%</span> open source
          </a>
        </div>

        {visible && (
          <div className="w-[90%] absolute top-0 left-[5%] right-[5%] h-full pointer-events-none hidden lg:block">
            {floatingTags.map((tag) => (
              <div
                key={tag.label}
                className={`absolute ${tag.top} ${tag.side === "left" ? "left-0" : "right-0"} slide-up`}
              >
                <div className={`relative transition-all hover:scale-110 ${tag.rotate} pointer-events-auto`}>
                  <a
                    href={`/#${tag.label.toLowerCase().replace(/\s+/g, "")}`}
                    style={{ borderColor: tag.color, color: tag.color }}
                    className="px-5 py-2 border-[1.5px] rounded-[4px] bg-white text-base font-bold inline-block"
                  >
                    {tag.label}
                  </a>
                  <svg className="absolute -right-0.5 -bottom-2" width="10" height="10" viewBox="0 0 11 11" fill="none">
                    <rect width="10.9223" height="10.9223" fill={tag.color} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="w-full">
          <div className="font-bold leading-tight text-left lg:text-center pl-6 lg:pl-0 text-slate-900 text-4xl lg:text-7xl">
            <span>Educate Your</span>
            <div className="flex flex-wrap items-center justify-start lg:justify-center lg:gap-3 my-2">
              <span className="w-full lg:w-auto h-[44px] md:h-[52px] lg:h-[80px] relative inline-block overflow-hidden">
                <span
                  key={titleIndex}
                  className="absolute left-0 lg:left-auto lg:right-0 w-full slide-up"
                  style={{ color: names[titleIndex].color }}
                >
                  {names[titleIndex].label}
                </span>
              </span>
            </div>
            <span>from one Platform</span>
          </div>

          <p className="text-base mx-auto mt-8 px-6 text-slate-600 md:text-lg lg:mt-5 lg:w-[42%] lg:px-0 leading-relaxed">
            ClassroomIO is an open source learning management system for companies. We give you a
            suite of tools to help you achieve your training, onboarding and certification goals.
          </p>
        </div>

        <div className="my-10 flex flex-col items-center justify-center gap-4 md:flex-row px-6 lg:px-0">
          <Link
            href="https://cal.com/classroomio/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto rounded-md border-2 border-gray-200 px-7 py-3.5 text-sm font-semibold text-center transition-all hover:bg-gray-100 hover:shadow-md"
          >
            Book a demo
          </Link>
          <Link
            href="https://app.classroomio.com/signup"
            className="w-full md:w-auto rounded-md bg-[#0233BD] px-7 py-3.5 text-sm font-semibold text-white text-center transition-all hover:bg-blue-800 hover:shadow-md"
          >
            Sign Up for Free
          </Link>
        </div>

        <div className="mx-auto w-[88%] lg:w-[72%] relative" style={{ paddingBottom: "calc(50% + 42px)" }}>
          <iframe
            title="ClassroomIO Live Demo"
            src="https://app.supademo.com/embed/cluw8chyy06nhq2s9m697a680"
            allow="clipboard-write"
            frameBorder={0}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-t-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
