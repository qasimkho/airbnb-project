import React from "react";
import Logo from "../src/assets/Logo.png"

export default function NavBar() {
    return (
        <div className="navbar">
            <img  className="logo" src={Logo} />
        </div>
    )
}