export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="bg-card border border-border rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Skills I Have
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build
            scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Frontend & Backend Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {[
            { title: "Frontend", list: skills.frontend },
            { title: "Backend", list: skills.backend },
          ].map((category, idx) => (
            <SkillCard key={idx} title={category.title} list={category.list} />
          ))}
        </div>

        {/* Database & Others Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[
            { title: "Database", list: skills.database },
            { title: "Others", list: skills.others },
          ].map((category, idx) => (
            <SkillCard key={idx} title={category.title} list={category.list} />
          ))}
        </div>

        {/* Soft Skills Footer */}
        <SkillCard title="Soft Skills" list={skills.softSkills} fullWidth />
      </div>
    </section>
  );
}

function SkillCard({
  title,
  list,
  fullWidth = false,
}: {
  title: string;
  list: string[];
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`p-6 bg-muted/60 rounded-2xl border border-border  hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        fullWidth ? "w-full mt-4" : ""
      }`}
    >
      <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-widest text-center">
        {title}
      </h4>
      <div className="flex flex-wrap justify-center gap-3">
        {list.map((skill, index) => (
          <span
            key={index}
            className="h-10 px-6 flex items-center justify-center bg-accent text-secondary-foreground rounded-md text-sm font-medium shadow-sm hover:shadow transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const skills = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Ui Libraries",
    "Redux Toolkit",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "Firebase", "JWT", "OAuth"],
  database: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis"],
  others: ["AI APIs", "Git & GitHub", "Axios", "TanStack Query", "AOS"],
  softSkills: [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Continuous Learning",
  ],
};
