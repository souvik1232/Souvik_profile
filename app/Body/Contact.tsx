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
    <div className='flex px-80 py-40  flex-col bg-gray-100 gap-10' id='contact'>
      <div>
        <h3>CONTACT</h3>
        <h4>Don&apos;t be shy! Hit me up! 👇</h4>
      </div>
      <div className='flex gap-8'>
        <div className='flex gap-4 items-center'>
          <span className='contactButton'>
            <Image priority src={map} alt='Souvik' className='colorBlue' />
          </span>
          <div className='flex flex-col'>
            <span className='headerStyle1'>Location</span>
            <span className='headerStyle2'>Delhi, India</span>
          </div>
        </div>

        <div className='flex gap-4'>
          <span className='contactButton'>
            <Image priority src={mail} alt='Souvik' className='colorBlue' />
          </span>
          <div className='flex flex-col'>
            <span className='headerStyle1'>Mail</span>
            <span className='headerStyle2' onClick={() => handleClick()}>
              souvik199831@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
