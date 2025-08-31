import { Navbar } from "@/components/layout/Navbar";
import About from "@/components/modules/About";
import Banner from "@/components/modules/Banner";
import Contact from "@/components/modules/Contact";
// import EduAndExperience from "@/components/modules/EduAndExperience";
import Projects from "@/components/modules/Projects";
import Skills from "@/components/modules/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      {/* <EduAndExperience /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
