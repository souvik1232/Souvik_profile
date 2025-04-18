"use client";
import Image from "next/image";
import "../styles/contact.css";
import map from "../assets/map-svgrepo-com.svg";
import mail from "../assets/mail-svgrepo-com.svg";

export default function Contact() {
  const handleClick = () => {
    window.location.href = "mailto:souvik199831@gmail.com";
  };
  return (
    <div className='flex px-6 md:px-80 py-20 flex-col bg-gray-100 gap-10 items-center' id='contact'>
      <div className='text-center md:text-left'>
        <h3>CONTACT</h3>
        <h4>Don&apos;t be shy! Hit me up! 👇</h4>
      </div>
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='flex gap-4 items-center'>
          <span className='contactButton'>
            <Image priority src={map} alt='Souvik' className='colorBlue' width={30} height={30} />
          </span>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <span className='headerStyle1'>Location</span>
            <span className='headerStyle2'>Bangalore, India</span>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <span className='contactButton'>
            <Image priority src={mail} alt='Souvik' className='colorBlue' width={30} height={30} />
          </span>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <span className='headerStyle1'>Mail</span>
            <span className='headerStyle2' onClick={handleClick}>
              souvik199831@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

