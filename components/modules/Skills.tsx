/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Code, Server, Database } from "lucide-react";
import SectionHeader from "../SectionHeader";

interface SkillCategory {
  title: string;
  list: string[];
  icon: React.ElementType;
  fullWidth?: boolean;
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4">
      <div className="bg-card border border-border rounded-3xl p-5 md:p-10">
        {/* Header Section */}
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A comprehensive set of tools and technologies I use to build scalable, efficient, and user-friendly applications with modern development practices."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              list={category.list}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  list: string[];
  icon: React.ElementType;
}

function SkillCard({ title, list, icon: Icon }: SkillCardProps) {
  return (
    <div
      className={`group p-5 md:p-8 bg-gradient-to-br rounded-2xl border border-border`}
    >
      {/* Category Header */}
      <div className="flex items-center justify-center mb-3">
        <div className="p-3 bg-background/10 rounded-xl backdrop-blur-sm">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-6 text-lg uppercase tracking-wider text-center">
        {title}
      </h4>

      {/* Skills Grid */}
      <div className={`grid grid-cols-2 gap-3`}>
        {list.map((skill: any, index: any) => (
          <div
            key={index}
            className="group/skill relative overflow-hidden cursor-pointer"
          >
            <div className="h-12 px-4 flex items-center justify-center bg-background/50 backdrop-blur-sm text-foreground rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:bg-background/90 transition-all duration-200 border border-border/50">
              <span className="relative z-10">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    list: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "UI Libraries",
      "Redux Toolkit",
      "TanStack Query",
    ],
    icon: Code,
    fullWidth: false,
  },
  {
    title: "Backend",
    list: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "Firebase",
      "JWT & OAuth",
      "API Security",
    ],
    icon: Server,
    fullWidth: false,
  },
  {
    title: "Database",
    list: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Database Design",
    ],
    icon: Database,
    fullWidth: false,
  },
];
