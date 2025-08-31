import { GraduationCap, Briefcase } from "lucide-react";

// Demo experience data - make this dynamic later
const experienceData = [
  {
    id: 1,
    period: "2021 - Present",
    title: "Web Designer",
    company: "Themeforest Market",
    description:
      "Leading web design projects and creating modern, responsive websites for global clients.",
    current: true,
  },
  {
    id: 2,
    period: "2021 - 2023",
    title: "Marketing Expert GRP",
    company: "Envato Theme Developer",
    description:
      "Specialized in digital marketing strategies and theme development for various platforms.",
    current: false,
  },
  {
    id: 3,
    period: "2021 - 2022",
    title: "Web Designer",
    company: "Web Developer & Business Partner",
    description:
      "Collaborated on web development projects and business solutions for emerging startups.",
    current: false,
  },
];

// Demo education data - make this dynamic later
const educationData = [
  {
    id: 1,
    period: "2013 - 2015",
    title: "Bachelor Degree of Information Technology",
    institution: "State University bangladesh",
    description:
      "Comprehensive study in IT fundamentals, programming, and system design.",
    completed: true,
  },
  {
    id: 2,
    period: "2021 - 2024",
    title: "Higher secoundery Education",
    institution: "Premium College United VC",
    description:
      "Advanced studies in computer science and software engineering principles.",
    completed: true,
  },
  {
    id: 3,
    period: "2020 - 2021",
    title: "UI/UX Design",
    institution: "Webster College",
    description:
      "Specialized certification in user interface and user experience design.",
    completed: true,
  },
];

const TimelineCard = ({ item, icon: Icon }) => (
  <div className="group relative">
    {/* Timeline line connector */}
    <div className="absolute left-6 top-16 w-px h-full bg-border group-last:hidden"></div>

    <div className="flex gap-4">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-border rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
        <Icon className="w-5 h-5 text-white/70" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-background/50 border border-border rounded-2xl p-6 hover:bg-background/70 hover:border-white/20 transition-all duration-300 group-hover:shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg font-semibold text-white mb-1 sm:mb-0">
              {item.title}
            </h3>
            <span className="text-sm text-muted-foreground font-medium bg-white/5 px-3 py-1 rounded-full">
              {item.period}
            </span>
          </div>

          <h4 className="text-white/80 font-medium mb-3">
            {item.company || item.institution}
          </h4>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {/* Status indicator */}
          {(item.current || item.completed) && (
            <div className="mt-4">
              <span
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  item.current
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.current ? "bg-green-400" : "bg-blue-400"
                  }`}
                ></div>
                {item.current ? "Current" : "Completed"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function EduAndExperience() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-0">
            {experienceData.map((experience) => (
              <TimelineCard
                key={experience.id}
                item={experience}
                icon={Briefcase}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-0">
            {educationData.map((education) => (
              <TimelineCard
                key={education.id}
                item={education}
                icon={GraduationCap}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
