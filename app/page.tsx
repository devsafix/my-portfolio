import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import About from "@/components/modules/About";
import Banner from "@/components/modules/Banner";
import Contact from "@/components/modules/Contact";
import Projects from "@/components/modules/Projects";
import Skills from "@/components/modules/Skills";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
