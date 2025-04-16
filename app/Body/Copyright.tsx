import React from "react";
import "../styles/copyrights.css";
import Socialicons from "../common/Socialicons";

export default function Copyright() {
  return (
    <div className='flex bg-gray-100 py-20 px-80 bg-copyright items-center justify-between'>
      <span className='content-copyright'>
        Copyright © 2024. All rights are reserved
      </span>
      <Socialicons color='white' />
    </div>
  );
}
