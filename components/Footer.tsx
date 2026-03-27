import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Course Management", href: "/#coursemanagement" },
    { label: "Customizations", href: "/#customization" },
    { label: "Forum", href: "/#collaboration" },
    { label: "AI Lesson Planner", href: "/#ai" },
    { label: "Student Dashboard", href: "/#student-dashboard" },
  ],
  Solutions: [
    { label: "Employee Training", href: "/employee-training" },
    { label: "Bootcamps", href: "/bootcamps" },
    { label: "Customer Education", href: "/customer-education" },
  ],
  Resources: [
    { label: "Contact us", href: "/contact" },
    { label: "Help center", href: "https://classroomio.com/docs/", external: true },
    { label: "Getting Started", href: "https://classroomio.com/docs/quickstart/signup", external: true },
    { label: "OSS Friends", href: "/oss-friends" },
  ],
  Company: [
    { label: "Roadmap", href: "/roadmap" },
    { label: "Support", href: "mailto:help@classroomio.com", external: true },
    { label: "Privacy policy", href: "https://app.enzuzo.com/policies/privacy/958fc978-5477-11ee-a03b-7b111830c594", external: true },
    { label: "Terms of use", href: "https://app.enzuzo.com/policies/tos/958fc978-5477-11ee-a03b-7b111830c594", external: true },
  ],
};

export default function Footer() {
  return (
    <div className="border-t border-[var(--border)] px-6 lg:px-[14%]">
      <div className="flex flex-col lg:flex-row items-start justify-between py-16 gap-12">
        <div className="w-full lg:w-64 shrink-0">
          <div className="w-9 h-9 bg-[#0233BD] rounded-lg flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <p className="text-sm leading-7 text-gray-600 mb-5">
            The Open Source Learning Management System for Companies. ClassroomIO is the easiest way to grow your teaching business.
          </p>
          <div className="flex items-center gap-5 mt-6">
            <a href="https://twitter.com/classroomio" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@ClassroomIO" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="20" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
            <a href="https://github.com/classroomio/classroomio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-10 lg:gap-14 w-full lg:w-auto lg:justify-end">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="min-w-[110px]">
              <p className="text-sm font-semibold text-gray-900 mb-4 lg:mb-8">{section}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <footer className="border-t border-[var(--border)] py-8 text-xs text-gray-400 flex flex-col gap-1">
        <p>All rights reserved.</p>
        <p>
          ClassroomIO &copy; {new Date().getFullYear()} by{" "}
          <a href="https://twitter.com/rotimi_best" target="_blank" rel="noopener noreferrer" className="text-[#0233BD] underline">
            Rotimi Best
          </a>
        </p>
      </footer>
    </div>
  );
}
