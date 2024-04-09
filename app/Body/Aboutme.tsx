import Image from "next/image";
import "../styles/about.css";
import asset from "../assets/asset1.svg";
import work from "../assets/work.png";

export default function Aboutme() {
  return (
    <div className='flex justify-center py-60 bg-white gap-20'>
      <div className='p-44 aboutPlaceholder'>
        <Image priority src={asset} alt='Souvik' className='logo' />
        <Image priority src={work} alt='Souvik' className='logo1' />
      </div>
      <div className='flex flex-col justify-center'>
        <h3>ABOUT ME</h3>
        <h4>
          Front-end Developer
          <br />
          based in Delhi, India 📍
        </h4>
        <p>
          Hey, my name is Souvik, and I&apos;m a Frontend Developer. My passion
          is to create and develop a clean UI/UX for my users.
          <br />
          My main stack currently is Angular/React/Next.js in combination with
          Tailwind CSS and TypeScript.
        </p>
      </div>
    </div>
  );
}
