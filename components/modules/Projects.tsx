"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const allProjectsData = [
  {
    title: "BazaarNest",
    description: "An E-commerce project built with the MERN stack!",
    image: "https://i.ibb.co.com/dm26v0H/E-Commerce-Facebook-Ad.png",
    liveLink: "https://bazaarnest.vercel.app/",
    clientLink: "https://github.com/devsafix/bazaarnest-client",
    serverLink: "https://github.com/devsafix/bazaarnest-server",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Firebase",
      "Aos",
      "Swiper js",
      "Node js",
      "Express",
      "Mongodb",
    ],
    mernStack: true,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Hiring Staff",
    description: "Online Recruitment & Communication Platform",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://hiring-staff.vercel.app/",
    clientLink: "https://github.com/sajjathossainbd/hiring-staff",
    serverLink: "https://github.com/sajjathossainbd/hiring-staff-server",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Firebase",
      "Aos",
      "Framer motion",
      "Crisp live chat",
      "Swiper js",
      "Redux",
      "Node js",
      "Express",
      "Mongodb",
      "Stripe",
    ],

    mernStack: true,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "WinZone",
    description: "A contest platform with user, creator, and admin roles",
    image:
      "https://i.ibb.co.com/4SPtVwT/Colorful-and-Festive-Higantes-Mascot-and-Ingredients-Illustration-Cooking-Competition-Banner.jpg",
    liveLink: "https://photo-contest-cb4ef.web.app/",
    clientLink: "https://github.com/dev-kawser/winzone-client",
    serverLink: "https://github.com/dev-kawser/winzone-server",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Firebase",
      "Swiper js",
      "Node js",
      "Express",
      "Mongodb",
    ],

    mernStack: true,
    reactJs: true,
    NextJs: false,
    template: false,
  },
  {
    title: "Video Editor Portfolio",
    description:
      "A dynamic portfolio showcasing professional video editing projects with creative techniques and seamless design.",
    image:
      "https://i.ibb.co.com/KqbyxBJ/Black-Orange-Modern-Minimalist-Creative-Online-Portfolio-Cover-3.jpg",
    liveLink: "https://video-editor-personal.vercel.app/",
    tech: ["Tailwind css", "React", "React router", "Aos", "Swiper js"],

    mernStack: false,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Honeymoon Studio",
    description:
      "Create a visually striking and responsive UI that adapts beautifully across all devices!",
    image:
      "https://i.ibb.co.com/Qk9dNJk/Beige-Brown-Green-Simple-Watercolor-Floral-Wedding-Photography-Blog-Banner.jpg",
    liveLink: "https://honeymoonstudio.netlify.app/",
    clientLink: "https://github.com/dev-kawser/honeymoon-studio",
    tech: ["Tailwind css", "React", "React router", "Swiper js"],

    mernStack: false,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Smart Tech Spot",
    description:
      "A query management system with user verification and admin functionality.",
    image: "https://i.ibb.co.com/GVRxqbR/Screenshot-2025-01-04-235258.jpg",
    liveLink: "https://smart-tech-project.web.app/",
    clientLink: "https://github.com/dev-kawser/query-website-client",
    serverLink: "https://github.com/dev-kawser/query-website-server",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Firebase",
      "Swiper js",
      "Node js",
      "Express",
      "Mongodb",
    ],

    mernStack: true,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Video Editor Portfolio",
    description: "Creative Video Editing, Seamlessly Delivered",
    image:
      "https://i.ibb.co.com/9rYGYhx/Black-Orange-Modern-Minimalist-Creative-Online-Portfolio-Cover-4.jpg",
    liveLink: "https://mnahmed.vercel.app/",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Aos",
      "Lenis",
      "Email js",
      "Swiper js",
    ],

    mernStack: false,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Fragrant",
    description:
      "Transform your vision into a stunning front-end UI that captivates users!",
    image: "https://i.ibb.co.com/M8XZdQv/Screenshot-2025-01-05-000044.jpg",
    liveLink: "https://fragranthub.netlify.app/",
    clientLink: "https://github.com/dev-kawser/fragrant-front-end-project",
    tech: ["Tailwind css", "React", "React router"],

    mernStack: false,
    reactJs: true,
    NextJs: false,
    template: true,
  },
  {
    title: "Artistic Avenue",
    description: "Artistic Avenue—where creativity connects and inspires",
    image: "https://i.ibb.co.com/wz51T1z/Screenshot-2025-01-05-000344.jpg",
    liveLink: "https://art-and-craft-cdc17.web.app/",
    clientLink: "https://github.com/dev-kawser/artistic-avenue-client",
    serverLink: "https://github.com/dev-kawser/artistic-avenue-server",
    tech: [
      "Tailwind css",
      "React",
      "React router",
      "Firebase",
      "Node js",
      "Express",
      "Mongodb",
    ],

    mernStack: false,
    reactJs: true,
    NextJs: false,
    template: false,
  },
];

const projectsData = allProjectsData.map((proj, index) => ({
  id: index + 1,
  title: proj.title,
  description:
    proj.description.length < 200
      ? proj.description +
        " This project is a robust and fully-featured application showcasing advanced development practices, ensuring seamless performance and user experience."
      : proj.description,
  category: proj.mernStack
    ? "Full-Stack"
    : proj.NextJs
    ? "Next.js"
    : proj.reactJs
    ? "Frontend"
    : "General",
  image: proj.image,
  liveLink: proj.liveLink || null,
  clientRepo: proj.clientLink || null,
  serverRepo: proj.serverLink || null,
  featured: true,
}));

const categories = ["All", "Frontend", "Full-Stack", "Next.js", "General"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-card border border-border rounded-3xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-all">
        <SectionHeader
          title="Works & Projects"
          subtitle="Check out some of my development projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-black shadow-lg"
                  : "bg-transparent text-muted-foreground hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const slug = project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");

            return (
              <div
                key={project.id}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {project.clientRepo && (
                        <a
                          href={project.clientRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-white transition-colors border border-white/10"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      )}
                      {project.clientRepo && (
                        <a
                          href={project.clientRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-white transition-colors border border-white/10"
                        >
                          <Github className="w-3 h-3" />
                          Client
                        </a>
                      )}
                      {project.serverRepo && (
                        <a
                          href={project.serverRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-white transition-colors border border-white/10"
                        >
                          <Github className="w-3 h-3" />
                          Server
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/project-details/${slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black hover:bg-white/90 rounded-lg text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3 h-3" />
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
