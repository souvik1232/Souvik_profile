import React from "react";
import '../styles/navbar.css'

export default function Navbar() {
    const navbarOptions = ['Home','About','Project','Contact']
    return (
        <div className="flex justify-between px-12 py-6 sticky top-0 shadow-md bg-gray-50" >
            <span className="userNameFont">Souvik.dev</span>
            <div className="flex gap-6 optionsFont">
                {navbarOptions.map((item) => {
                    return (<span key={item} className="hover:text-sky-600 cursor-pointer">{item}</span>)
                })}
            </div>
        </div>
    )
}