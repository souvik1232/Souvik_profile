import Aboutme from "./Body/Aboutme";
import Intro from "./Body/Intro";
import Navbar from "./navbar/navbar";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ['400','500','600','800'], style: ['normal'], subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${poppins.className} h-screen`}>
      <div id="portfolio-header" className="sticky top-0">
        <Navbar />
      </div>
      <div id="portfolio-body" className="portfolioBody">
        <Intro />
        <Aboutme/>
      </div>
    </main>
  );
}
