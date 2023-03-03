import React from 'react';


export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='box'>
            <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>} {/* if badgeText is truthy value then thing after && will print */}
            <img className='card--image' src={`../images/${props.img}`} />
            <div className="card--stats">
                <img className='card--star' src="../src/assets/Star.png" />
                <span>{props.rating}</span>
                <span className='gray'> {props.reviewCount} . </span>
                <span className='gray'>{props.location}</span>
            </div>
            <div>
                <p>{props.title}</p>
            </div>
            <div className='price'>
                <p><span className='bold'>${props.price}</span> / person</p>
            </div>
        </div>
        </div>
    )
}

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/