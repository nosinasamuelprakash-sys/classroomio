const testimonial = {
  avatar:
    "https://senjaio.b-cdn.net/public/avatar/406f29d4-5811-4f2e-90c1-e586fce3b3a7_me.JPEG?width=78&height=78&format=webp",
  quote:
    "ClassroomIO really helped me bootstrap my program. The dashboard is extremely intuitive. I could navigate most of it without any help / support. Coming from framer, I can honestly say that I am extremely grateful that I found ClassroomIO.",
  name: "Pranav Singhal",
  role: "Founder at DBlockEd",
  roleLink: "https://www.dblocked.io/",
};

const sections = [
  {
    id: "coursemanagement",
    tagline: "Simplified",
    title: "Course Management",
    description:
      "ClassroomIO simplifies teaching tasks, boosts the educational experience, and is beneficial for both educators and students, providing a user-friendly platform for assessment, grading, attendance, and scorebook management.",
    video: "https://brand.cdn.clsrio.com/course-management.mp4",
    rightToLeft: true,
  },
  {
    id: "ai",
    tagline: "Efficient",
    title: "AI Support",
    description:
      "Our platform integrates AI to simplify lesson outline generation, streamline lesson planning and spark creative ideas. With ClassroomIO, educators can focus on what matters most: teaching.",
    video: "https://brand.cdn.clsrio.com/ai-lesson.mp4",
    rightToLeft: false,
  },
  {
    id: "customization",
    tagline: "Flexible",
    title: "Dashboard Customization",
    description:
      "ClassroomIO offers organizations the ability to tailor our LMS to their specific requirements. With our customizable features, you can create a personalized learning environment that aligns with your organization's goals.",
    video: "https://brand.cdn.clsrio.com/lms-customization.mp4",
    rightToLeft: true,
  },
  {
    id: "collaboration",
    tagline: "Collaborative",
    title: "Student and Teacher Community",
    description:
      "Our platform includes a forum-like feature where students and teachers can ask and answer questions, creating a collaborative learning environment. This fosters engagement and knowledge sharing among the community.",
    video: "https://brand.cdn.clsrio.com/community.mp4",
    rightToLeft: false,
  },
];

function FeatureSection({
  id,
  tagline,
  title,
  description,
  video,
  rightToLeft,
}: (typeof sections)[0]) {
  return (
    <section id={id} className="w-full py-24 border-b border-gray-200">
      <div
        className={`w-4/5 mx-auto flex flex-col ${
          rightToLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-between gap-10 lg:gap-20`}
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
            {tagline}
          </p>
          <h2 className="font-bold text-3xl lg:text-4xl mb-4 text-gray-900">{title}</h2>
          <p className="leading-relaxed text-lg text-gray-500">{description}</p>
        </div>
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <video
            width="100%"
            height="100%"
            className="w-full h-auto rounded-xl shadow-xl"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default function CoreFeatures() {
  return (
    <>
      {/* Testimonial */}
      <section className="w-full py-24 border-b border-gray-200">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-6">
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            className="w-14 h-14 rounded-full mb-4 object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="font-bold text-4xl opacity-40">&ldquo;</span>
            {testimonial.quote}
            <span className="font-bold text-4xl opacity-40">&rdquo;</span>
          </p>
          <p className="mt-4 text-sm font-semibold text-gray-700">{testimonial.name}</p>
          <a
            href={testimonial.roleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            {testimonial.role}
          </a>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((s) => (
        <FeatureSection key={s.id} {...s} />
      ))}
    </>
  );
}
