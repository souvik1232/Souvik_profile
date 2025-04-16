import Aboutme from "./Body/Aboutme";
import Contact from "./Body/Contact";
import Copyright from "./Body/Copyright";
import Intro from "./Body/Intro";
import Projects from "./Body/Projects";
import Navbar from "./navbar/navbar";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} `}>
      <div id='portfolio-header' className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div id='portfolio-body' className='portfolioBody'>
        <Intro />
        <Aboutme />
        <Projects />
        <Contact />
        <Copyright />
      </div>
    </main>
  );
}
