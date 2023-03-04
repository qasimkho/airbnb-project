import React from 'react';


export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
            <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>} {/* if badgeText is truthy value then thing after && will print */}
            <img className='card--image' src={`../images/${props.Img}`} />
            <div className="card--stats">
                <img className='card--star' src="../src/assets/Star.png" />
                <span>{props.rating}</span>
                <span className='gray'> {props.reviewCount} . </span>
                <span className='gray'>{props.location}</span>  {/* this has some logic that needs to be learnt */}
            </div>
            <p>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
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