/* eslint-disable @next/next/no-img-element */
import "../styles/intro.css";
import Socialicons from "../common/Socialicons";

/* eslint-disable react/no-unescaped-entities */
export default function Intro() {
  return (
    <div
      className='flex justify-center bg-gray-100 flex-col px-80 h-screen items-center'
      id='intro'>
      <div className='flex flex-row py-20 align-center'>
        <div className='flex flex-col justify-center'>
          <span className='fontStyle1'>Full-stack Developer 🖖</span>
          <span className='fontStyle2'>
            Hi, I'm Souvik Mandal. A passionate Full-stack Developer based in
            Bangalore, India. 📍
          </span>
          <Socialicons color='black' />
        </div>
        <div className='p-44 rounded-full portfolioImage'></div>
      </div>
      <div className='flex gap-6 py-5 items-center'>
        <span className='fontStyle2'>Tech Stack</span>
        <div className='cursor-pointer elevate'>
          <img
            src='https://skillicons.dev/icons?i=html,css'
            alt='skill-icon'></img>
        </div>
        <div className='cursor-pointer elevate'>
          <img
            src='https://skillicons.dev/icons?i=js,ts'
            alt='skill-icon'></img>
        </div>
        <div className='cursor-pointer elevate'>
          <img
            src='https://skillicons.dev/icons?i=react,next'
            alt='skill-icon'></img>
        </div>
        <div className='cursor-pointer elevate'>
          <img
            src='https://skillicons.dev/icons?i=tailwind,scss'
            alt='skill-icon'></img>
        </div>
        <div className='cursor-pointer elevate'>
          <img
            src='https://skillicons.dev/icons?i=nodejs,azure'
            alt='skill-icon'></img>
        </div>
      </div>
    </div>
  );
}
