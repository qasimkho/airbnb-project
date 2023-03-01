import React from "react";
import Image from "../src/assets/Image.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={Image} />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        )
}