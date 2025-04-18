import Image from "next/image";
import "../styles/about.css";
import asset from "../assets/asset1.svg";
import work from "../assets/work.png";

export default function Aboutme() {
  return (
    <div
      className='flex flex-col md:flex-row justify-center items-center py-20 px-6 md:py-60 md:px-80 bg-white gap-10 md:gap-20 min-h-screen'
      id='aboutme'>
      <div className='p-44 aboutPlaceholder'>
        <Image priority src={asset} alt='Souvik' className='logo hidden md:block' width="100" height="100" />
        <Image priority src={work} alt='Souvik' className='logo1 hidden md:block' width="100" height="100" />
      </div>
      <div className='flex flex-col justify-center'>
        <h3>ABOUT ME</h3>
        <h4>
          Full-stack Developer
          <br />
          based in Bangalore, India 📍
        </h4>
        <br />
        <br />
        <p>
          Hey, my name is Souvik, and I&apos;m a Fullstack Developer. My passion
          <br />
          is to create and develop a clean UI with a reliable backend for my
          users.
          <br />
          <br />
          My main stack currently includes Angular, React, and Next.js — which I&apos;m
          actively working with. I use
          <br />
          Tailwind CSS and TypeScript, alongside Node.js for server-side
          <br />
          operations, and I utilize AWS and Azure for cloud services and
          <br />
          infrastructure.
        </p>
      </div>
    </div>
  );
}
