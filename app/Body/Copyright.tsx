import React from "react";
import "../styles/copyrights.css";
import Socialicons from "../common/Socialicons";

export default function Copyright() {
  return (
    <div
      className="flex flex-col md:flex-row bg-gray-100 py-10 px-6 md:px-40 lg:px-80 bg-copyright items-center justify-center md:justify-between gap-4 text-center animate-fadeIn"
    >
      <span className="content-copyright">
        Copyright © 2025. All rights are reserved
      </span>
      <Socialicons color="white" />
    </div>
  );
}
