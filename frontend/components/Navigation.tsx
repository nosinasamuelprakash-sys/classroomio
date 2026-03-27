"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu, BookOpen, MapPin, MessageSquare } from "lucide-react";

const solutions = [
  {
    key: "employee-training",
    title: "Employee Training",
    subtitle: "Keep your team in sync.",
    icon: <BookOpen size={20} className="text-gray-600" />,
  },
  {
    key: "bootcamps",
    title: "Bootcamps",
    subtitle: "Drive student satisfaction.",
    icon: <MapPin size={20} className="text-gray-600" />,
  },
  {
    key: "customer-education",
    title: "Customer Education",
    subtitle: "Teach customers your product.",
    icon: <MessageSquare size={20} className="text-gray-600" />,
  },
];

export default function Navigation() {
  const [stars, setStars] = useState<number>(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/classroomio/classroomio")
      .then((r) => r.json())
      .then((d) => setStars(d?.stargazers_count || 0))
      .catch(() => {});
  }, []);

  function startCloseTimeout() {
    closeTimeoutRef.current = setTimeout(() => setShowSolutions(false), 150);
  }

  function cancelCloseTimeout() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }

  return (
    <header className="flex w-full justify-between items-center py-5 border-b border-border md:px-12 px-5 fixed top-0 z-[3000] backdrop-blur-xl shadow-sm bg-white/90">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 bg-[#0233BD] rounded-md flex items-center justify-center">
          <BookOpen size={16} className="text-white" />
        </div>
        <span className="text-base md:text-lg font-semibold text-gray-900">ClassroomIO</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-center gap-1">
        {/* Solutions dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors"
            onMouseEnter={() => { cancelCloseTimeout(); setShowSolutions(true); }}
            onMouseLeave={startCloseTimeout}
            onClick={() => setShowSolutions((v) => !v)}
          >
            Solutions <ChevronDown size={15} />
          </button>
          {showSolutions && (
            <div
              className="absolute top-11 -left-4 w-72 border border-border rounded-xl px-2 py-3 shadow-lg bg-white flex flex-col gap-1 z-[3001]"
              onMouseEnter={cancelCloseTimeout}
              onMouseLeave={() => setShowSolutions(false)}
            >
              {solutions.map((s) => (
                <Link
                  key={s.key}
                  href={`/${s.key}`}
                  className="flex items-center gap-3 w-full rounded-lg hover:bg-gray-50 p-2.5 transition-colors"
                  onClick={() => setShowSolutions(false)}
                >
                  {s.icon}
                  <div>
                    <p className="font-semibold text-sm text-gray-800">{s.title}</p>
                    <p className="text-xs text-gray-500">{s.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/tools" className="px-4 py-2 rounded-md text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors">
          Free Tools
        </Link>
        <Link href="/blog" className="px-4 py-2 rounded-md text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors">
          Blog
        </Link>
        <Link href="/pricing" className="px-4 py-2 rounded-md text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors">
          Pricing
        </Link>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-3">
        <a
          href="https://discord.gg/classroomio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-75 transition-opacity"
          aria-label="Discord"
        >
          <svg width="20" height="16" viewBox="0 0 20 16" fill="#5865F2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.93 1.33A16.08 16.08 0 0 0 12.9 0c-.19.34-.4.8-.55 1.16a14.88 14.88 0 0 0-4.7 0A11.76 11.76 0 0 0 7.1 0 16.12 16.12 0 0 0 3.07 1.34 17.04 17.04 0 0 0 .09 13.1a16.22 16.22 0 0 0 4.98 2.53c.4-.55.76-1.14 1.07-1.76a10.56 10.56 0 0 1-1.68-.82l.41-.32a11.56 11.56 0 0 0 9.96 0l.41.32c-.53.32-1.1.6-1.68.82.3.62.67 1.21 1.07 1.76A16.17 16.17 0 0 0 19.9 13.1 17.04 17.04 0 0 0 16.93 1.33ZM6.68 10.73c-1.02 0-1.86-.95-1.86-2.11s.82-2.11 1.86-2.11c1.03 0 1.87.95 1.86 2.11 0 1.16-.83 2.11-1.86 2.11Zm6.64 0c-1.02 0-1.86-.95-1.86-2.11s.82-2.11 1.86-2.11c1.03 0 1.87.95 1.86 2.11 0 1.16-.83 2.11-1.86 2.11Z" />
          </svg>
        </a>
        <a
          href="https://github.com/classroomio/classroomio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-gray-100 transition-colors group"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-sm text-gray-600 font-medium">{stars > 0 ? stars.toLocaleString() : "—"}</span>
        </a>
        <a
          href="https://app.classroomio.com"
          className="font-medium text-sm text-gray-800 hover:opacity-75 transition-opacity after:content-['_→']"
        >
          Dashboard
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        className="block lg:hidden"
        onClick={() => setShowMobileMenu((v) => !v)}
      >
        {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {showMobileMenu && (
        <div className="absolute right-0 top-0 w-[70%] md:w-[45%] h-screen border-l border-border bg-white z-[3002] px-4 pt-4 pb-6 flex flex-col shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#0233BD] rounded-md flex items-center justify-center">
                <BookOpen size={13} className="text-white" />
              </div>
              <span className="font-semibold text-sm">ClassroomIO</span>
            </div>
            <button onClick={() => setShowMobileMenu(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            <button
              className="flex items-center justify-between w-full text-left py-3 px-3 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
              onClick={() => setShowMobileSolutions((v) => !v)}
            >
              Solutions <ChevronDown size={16} className={`transition-transform ${showMobileSolutions ? "rotate-180" : ""}`} />
            </button>
            {showMobileSolutions && (
              <div className="pl-4 flex flex-col gap-1 mb-1">
                {solutions.map((s) => (
                  <Link
                    key={s.key}
                    href={`/${s.key}`}
                    className="text-sm text-gray-600 hover:bg-gray-50 py-2.5 px-3 rounded-lg transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            {[
              { href: "/tools", label: "Free Tools" },
              { href: "/blog", label: "Blog" },
              { href: "/pricing", label: "Pricing" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border pt-4 flex flex-col gap-2">
            <a
              href="https://app.classroomio.com"
              className="py-3 px-3 rounded-lg hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors after:content-['_→']"
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
