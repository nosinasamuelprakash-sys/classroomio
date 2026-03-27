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
    { label: "Teach with us", href: "/teach" },
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
    <div className="border-t border-border px-6 lg:px-[14%]">
      <div className="flex flex-col lg:flex-row items-start justify-between py-16 gap-12">
        {/* Brand */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="w-9 h-9 bg-[#0233BD] rounded-lg flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <p className="text-sm leading-7 text-gray-600 mb-5">
            The Open Source Learning Management System for Companies.
            ClassroomIO is the easiest way to grow your teaching business.
          </p>
          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://www.facebook.com/classroomiohq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.256h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/classroomio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ClassroomIO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg width="20" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
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

      <footer className="border-t border-border py-8 text-xs text-gray-400 flex flex-col gap-1">
        <p>All rights reserved.</p>
        <p>
          ClassroomIO &copy; {new Date().getFullYear()} by{" "}
          <a
            href="https://twitter.com/rotimi_best"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0233BD] underline"
          >
            Rotimi Best
          </a>
        </p>
      </footer>
    </div>
  );
}
