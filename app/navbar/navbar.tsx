// import React from "react";
"use client";
import Darkmode from "../common/Darkmode";
import "../styles/navbar.css";

export default function Navbar() {
  const navbarOptions = [
    { id: "intro", value: "Home" },
    { id: "aboutme", value: "About" },
    { id: "aboutme", value: "Project" },
    { id: "contact", value: "Contact" },
  ];
  const handleCLick = (value) => {
    let target = document.getElementById(value);
    target?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='flex justify-between px-12 py-6 items-center shadow-md bg-gray-50'>
      <span className='userNameFont'>Souvik.dev</span>
      <div className='flex gap-6 optionsFont'>
        {navbarOptions.map((item) => {
          return (
            <span
              key={item.value}
              className='hover:text-sky-600 cursor-pointer'
              onClick={() => handleCLick(item.id)}>
              {item.value}
            </span>
          );
        })}
      </div>
      {/* <Darkmode /> */}
    </div>
  );
}
