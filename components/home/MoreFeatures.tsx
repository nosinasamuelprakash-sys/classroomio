"use client";

import { useState, useEffect } from "react";

const moreFeatures = [
  {
    title: "Customizable Landing Page",
    description: "A minimalistic landing page template out of the box to share your courses with the world.",
    image: "https://assets.cdn.clsrio.com/www/landing-page-builder.webp",
  },
  {
    title: "Team Management",
    description: "Extend invitations and manage your teaching institution seamlessly through ClassroomIO.",
    image: "https://assets.cdn.clsrio.com/www/team-management.png",
  },
  {
    title: "Auto Video Transcription",
    description: "AI automatically transcribes videos, making content searchable for seamless student access.",
    image: "https://assets.cdn.clsrio.com/www/video-transcription.png",
  },
  {
    title: "Downloadable Lesson PDF",
    description: "Students can download lessons automatically for offline access.",
    image: "https://assets.cdn.clsrio.com/www/download-pdf.png",
  },
];

export default function MoreFeatures() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const interval = setInterval(() => {
        setSelected((i) => (moreFeatures[i + 1] ? i + 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="morefeatures" className="py-20 px-4 lg:px-0 bg-gray-50">
      <div className="mx-auto lg:mx-[12%]">
        <div className="w-full lg:w-4/5 mb-12 mx-0">
          <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl text-gray-900">There is More...</h2>
          <p className="mt-4 text-lg text-gray-500 w-full lg:w-4/5 leading-relaxed">
            ClassroomIO is packed with useful features while we try to make it easy to use.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-[42%] flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {moreFeatures.map((f, i) => (
              <button
                key={f.title}
                className={`p-4 rounded-xl text-start shrink-0 min-w-[72vw] lg:min-w-0 transition-all duration-200 ${
                  i === selected
                    ? "bg-gradient-to-br from-[#FDEF84] via-[#F7C6A9] to-[#15BAC4] shadow-md"
                    : "hover:bg-white hover:shadow-sm"
                }`}
                onMouseEnter={() => setSelected(i)}
                onClick={() => setSelected(i)}
              >
                <p className="text-base font-semibold text-gray-900 mb-1">{f.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-3/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={selected}
              src={moreFeatures[selected].image}
              alt={moreFeatures[selected].title}
              className="w-full rounded-xl shadow-lg slide-up"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
