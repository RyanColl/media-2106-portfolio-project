import React, { useState } from "react";
import './ExperienceCard.css'
const ExperienceCard = (props: any) => {
    const { tool: {title, description, url, backgroundColor, sideColor}, load} = props;
    const [cardHover, setCardHover] = useState(false)
    const hoverIn = () => {
        setCardHover(true)
    }
    const hoverOut = () => {
        setCardHover(false)
    }
    const sideBarStyle = cardHover ? {width: "100%", backgroundColor: sideColor} : {backgroundColor: sideColor}
    const contentImg = {width: "100%", height: "auto"}
    const contentStyle = cardHover ? {opacity: 0} : {opacity: 100}
    const cardLoad = load ? 'experience-card skeleton-card' : 'experience-card';
    return(
        <div onMouseOver={hoverIn} onMouseOut={hoverOut} className={cardLoad}>
            <div style={{ backgroundColor: backgroundColor}} className='card-content'>
                <div style={contentStyle} className={'hidden-tools'}>
                    <img src={url} />
                    <span className={'tool-title'}>{title}</span>
                    <span className='tool-description'>{description}</span>
                </div>
            </div>
            <div style={sideBarStyle} className='side-color'>
                
                <div className={'open-tools'}>
                    <img style={contentImg} src={url} />
                </div>
            </div>
            
        </div>
    )
}
export default ExperienceCard;