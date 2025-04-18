/* eslint-disable @next/next/no-img-element */
import "../styles/intro.css";
import Socialicons from "../common/Socialicons";

/* eslint-disable react/no-unescaped-entities */
export default function Intro() {
  return (
    <div
      className="flex justify-center bg-gray-100 flex-col px-6 md:px-80 min-h-screen items-center"
      id="intro"
    >
      <div className="flex flex-col-reverse md:flex-row py-10 md:py-20 items-center gap-10">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
            <span className="fontStyle1">Full-stack Developer 🖖</span>
            <span className="fontStyle2">
              Hi, I'm Souvik Mandal. A passionate Full-stack Developer based in
              Bangalore, India. 📍
            </span>

            {/* Center-align on mobile */}
            <div className="flex justify-center md:justify-start w-full mt-4">
              <Socialicons color="black" />
            </div>
          </div>
        </div>
        <div className="p-44 rounded-full portfolioImage"></div>
      </div>

      {/* Responsive Tech Stack */}
      <div className="flex flex-wrap gap-4 py-5 justify-center items-center">
        <span className="w-full text-center fontStyle2 mb-2">Tech Stack</span>

        {[
          "html,css",
          "js,ts",
          "react,next",
          "tailwind,scss",
          "nodejs,azure",
        ].map((icons, idx) => (
          <div className="cursor-pointer elevate" key={idx}>
            <img
              src={`https://skillicons.dev/icons?i=${icons}`}
              alt="skill-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
