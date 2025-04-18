"use client";
import { useState } from "react";
import Darkmode from "../common/Darkmode";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarOptions = [
    { id: "intro", value: "Home" },
    { id: "aboutme", value: "About" },
    { id: "project", value: "Project" },
    { id: "contact", value: "Contact" },
  ];

  const handleClick = (value: string) => {
    let target = document.getElementById(value);
    target?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between px-6 md:px-12 py-6 items-center shadow-md bg-gray-50 relative">
      <span className="userNameFont">Souvik.dev</span>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 optionsFont">
        {navbarOptions.map((item) => (
          <span
            key={item.value}
            className="hover:text-sky-600 cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            {item.value}
          </span>
        ))}
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden z-30">
        <button className="text-2xl" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-50 shadow-lg z-20 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-start gap-6 p-6 pt-20 optionsFont">
          {navbarOptions.map((item) => (
            <span
              key={item.value}
              className="hover:text-sky-600 cursor-pointer text-lg"
              onClick={() => handleClick(item.id)}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>

      {/* Optional: Overlay to close menu if clicked outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* <Darkmode /> */}
    </div>
  );
}
