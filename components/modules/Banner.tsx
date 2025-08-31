import React from "react";
import { Download, Github, Facebook, Instagram, Mail } from "lucide-react";

const personalInfo = {
  name: "KAWSER",
  greeting: "Hello There!",
  title:
    "Full Stack Developer (MERN) | Backend & Cloud Enthusiast | AI Automation Explorer | Prompt Engineering",
  description:
    "I'm a passionate and growth-oriented full-stack developer, specializing in building dynamic, scalable web applications using modern JavaScript technologies with a strong emphasis on backend development, cloud infrastructure, DevOps, and AI automation.",
  availability: "Available for Freelancing",
  email: "devsafix@gmail.com",
  phone: "+8801709190412",
  social: {
    github: "https://github.com/devsafix",
    facebook: "https://www.facebook.com/devsafix",
    instagram: "https://www.instagram.com/devsafix",
  },
};

export default function Banner() {
  return (
    <div className="pt-10">
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
            {/* Left Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-lg">
                {/* Profile Image Placeholder */}
                <div className="relative mx-auto mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-4xl font-bold">
                    {personalInfo.name.charAt(0)}
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {personalInfo.name}
                </h1>

                <p className="text-muted-foreground mb-8">
                  I am a Web Developer based in Bangladesh.
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={personalInfo.social.facebook}
                    className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.social.github}
                    className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.social.instagram}
                    className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Intro Card */}
              <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
                <p className="text-muted-foreground text-sm mb-4">
                  {personalInfo.greeting}
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {personalInfo.title}
                </h2>

                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground">
                    {personalInfo.availability}
                  </span>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
