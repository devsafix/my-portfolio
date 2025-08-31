import { Navbar } from "@/components/layout/Navbar";
import Banner from "@/components/modules/Banner";
import Skills from "@/components/modules/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills/>
    </div>
  );
}
