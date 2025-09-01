import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectDetailsProps {
  params: { slug: string };
}

const allProjectsData = [
  {
    title: "Ridaa",
    description: "A Fullstack Ride Booking System.",
    image: "https://i.ibb.co.com/b5dx9pBq/rida-bg.jpg",
    liveLink: "https://ridaa.vercel.app/",
    clientLink: "https://github.com/devsafix/ride-booking-system-client",
    serverLink: "https://github.com/devsafix/ride-booking-system-backend",
    tech: [
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "Shadcn",
      "Express",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Zod",
    ],
    mernStack: true,
    reactJs: true,
    NextJs: false,
    template: true,
  },
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

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = allProjectsData?.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      {/* Project Banner */}
      <div className="relative w-full h-[350px] lg:h-[500px] rounded-3xl overflow-hidden border border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Info & Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Info Card */}
        <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
          <DetailItem label="Project" value={project.title} />
          <DetailItem label="Live Link" value={project.liveLink} />
          {project.clientLink && (
            <DetailItem label="Client Code" value={project.clientLink} />
          )}
          {project.serverLink && (
            <DetailItem label="Server Code" value={project.serverLink} />
          )}
        </div>

        {/* Right Description Card */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h3 className="text-lg font-semibold mb-4">Description</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <h4 className="text-md font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg border border-border text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  const isLink = value.startsWith("http");
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      {isLink ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="text-base font-semibold">{value}</p>
      )}
    </div>
  );
}
