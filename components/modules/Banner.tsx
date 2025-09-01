import React from "react";
import { Download, Github, Facebook, Linkedin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const personalInfo = {
  name: "Kawser Ferdous Safi",
  greeting: "Hi, I'm Kawser!",
  title: "Full-Stack Developer (MERN) | Backend Enthusiast",
  description:
    "A highly driven full-stack developer with expertise in building scalable web applications, backend systems, and cloud-based solutions. Passionate about integrating AI automation and modern DevOps practices to deliver high-performance digital products.",
  availability: "Available To Work",
  email: "devsafix@gmail.com",
  phone: "+8801709190412",
  photo: "https://i.ibb.co.com/7xsYZ7HQ/devsafix.png",
  social: {
    github: "https://github.com/devsafix",
    linkedin: "https://www.linkedin.com/in/devsafix",
    facebook: "https://www.facebook.com/devsafix",
  },
};

export default function Banner() {
  return (
    <div className="pt-10 md:pt-16">
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Profile (1/3) */}
            <div className="bg-card border border-border rounded-3xl p-8 text-center flex flex-col justify-between">
              <div>
                {/* Profile Image */}
                <div className="relative mx-auto mb-6 flex items-center justify-center">
                  <Image
                    height={200}
                    width={200}
                    src={personalInfo.photo}
                    alt="its me"
                    loading="lazy"
                  />
                </div>

                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <p className="text-muted-foreground mb-6 text-sm">
                  Web Developer | Bangladesh
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4">
                {Object.entries(personalInfo.social).map(([key, url]) => {
                  const Icon = {
                    github: Github,
                    linkedin: Linkedin,
                    facebook: Facebook,
                  }[key];
                  if (!Icon) return null;
                  return (
                    <Link
                      key={key}
                      href={url}
                      target="_blank"
                      className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                      aria-label={key}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
                <Link
                  href={"https://wa.me/8801709190412"}
                  target="_blank"
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="Email"
                >
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Content (2/3) */}
            <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-5 md:p-10 flex flex-col justify-center">
              <p className="text-muted-foreground text-base mb-4">
                {personalInfo.greeting}
              </p>

              <h2 className="text-4xl uppercase font-bold text-foreground mb-6 tracking-wider leading-snug">
                {personalInfo.title}
              </h2>

              <p className="text-muted-foreground mb-6 text-lg">
                {personalInfo.description}
              </p>

              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 animate-pulse rounded-full mr-3"></div>
                <span className="text- text-muted-foreground">
                  {personalInfo.availability}
                </span>
              </div>

              <Link
                target="_blank"
                href={
                  "https://docs.google.com/document/d/1pHPCafL-0FDBjeluJvTy2kJFhm_TUxpjDdMnfNPoxuc/edit?usp=sharing"
                }
              >
                <Button className="cursor-pointer w-[150px] rounded-xl py-5 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
