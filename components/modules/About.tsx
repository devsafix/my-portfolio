import React from "react";
import { Code2, Target } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 pb-16">
      <div className="bg-card border border-border rounded-3xl p-5 md:p-10">
        <SectionHeader
          title="About My Journey"
          subtitle="Discover my path as a passionate full-stack developer, constantly evolving with modern technologies and exploring the intersection of development and AI automation."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a passionate and growth-oriented full-stack developer , I
                specialize in building dynamic, scalable web applications using
                modern JavaScript technologies. Currently enrolled in the
                &quot;Next Level Full Stack&quot; course, I&apos;m sharpening my
                skills with a strong emphasis on{" "}
                <span className="font-semibold text-foreground/80">
                  backend development
                </span>
                ,{" "}
                <span className="font-semibold text-foreground/80">
                  cloud infrastructure
                </span>
                ,{" "}
                <span className="font-semibold text-foreground/80">DevOps</span>
                , and{" "}
                <span className="font-semibold text-foreground/80">
                  AI automation
                </span>
                .
              </p>

              <p className="leading-relaxed text-muted-foreground mt-5 hidden lg:block">
                I love blending technology with intelligence. While I have
                hands-on experience building robust RESTful applications using
                Node.js, Express, and MongoDB , I&apos;m now diving deeper into
                PostgreSQL, GraphQL, and cloud-native architectures. I&apos;m
                also actively learning Data Structures & Algorithms (DSA) with
                Java to strengthen my problem-solving foundation.
              </p>

              <p className="leading-relaxed text-muted-foreground mt-5 hidden lg:block">
                My goal is to become an expert backend engineer with deep
                knowledge in DevOps, cloud platforms, and AI-driven workflows
                delivering fast, scalable, and secure solutions. Whether
                it&apos;s setting up CI/CD pipelines, managing containerized
                deployments, or automating processes with AI and no-code tools,
                I thrive in environments where I can blend performance with
                intelligence.
              </p>
            </div>
          </div>

          {/* Highlights - Right Column */}
          <div className="space-y-6">
            {/* Current Focus */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground ml-3">
                  Current Focus
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next Level Full Stack Course</li>
                <li>• Backend Development Mastery</li>
                <li>• Cloud Infrastructure & DevOps</li>
              </ul>
            </div>

            {/* Specializations */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-border/50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Code2 className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground ml-3">
                  Specializations
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• MERN Stack Development</li>
                <li>• RESTful API Design</li>
                <li>• Database Architecture</li>
                <li>• Authentication Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
