"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Mobile Application Design",
    description:
      "A modern mobile app interface with clean UI/UX design and intuitive user experience.",
    category: "Design",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: "https://github.com/example/client",
    serverRepo: "https://github.com/example/server",
    featured: true,
  },
  {
    id: 2,
    title: "Website Makeup Design",
    description:
      "Creative website design with engaging animations and responsive layout for beauty industry.",
    category: "Game",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: "https://github.com/example/client",
    serverRepo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Brand Identity and Motion Design",
    description:
      "Complete brand identity package with logo design and motion graphics for modern businesses.",
    category: "Branding",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: null,
    serverRepo: null,
    featured: true,
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration and admin dashboard.",
    category: "Design",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: "https://github.com/example/client",
    serverRepo: "https://github.com/example/server",
    featured: false,
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    description:
      "Comprehensive digital marketing strategy with social media integration and analytics.",
    category: "Marketing",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: null,
    serverRepo: null,
    featured: false,
  },
  {
    id: 6,
    title: "Game Development Project",
    description:
      "Interactive web-based game with engaging gameplay and modern graphics.",
    category: "Game",
    image:
      "https://i.ibb.co.com/7rV510m/Purple-and-Blue-Illustrative-We-are-Hiring-Banner.jpg",
    liveLink: "https://example.com",
    clientRepo: "https://github.com/example/client",
    serverRepo: "https://github.com/example/server",
    featured: false,
  },
];

const categories = ["All", "Design", "Game", "Branding", "Marketing"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-card border border-border rounded-3xl p-5 md:p-10 shadow-xl hover:shadow-2xl transition-all">
        {/* Header Section */}
        <SectionHeader
          title="Works & Projects"
          subtitle="Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail."
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
          {filteredProjects.map((project) => (
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

                  <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black hover:bg-white/90 rounded-lg text-xs font-medium transition-colors">
                    <Eye className="w-3 h-3" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more projects button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full font-medium transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
