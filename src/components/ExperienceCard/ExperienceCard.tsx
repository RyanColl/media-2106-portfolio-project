import React, { useState } from "react";
import './ExperienceCard.css'
const ExperienceCard = (props: any) => {
    const { tool: {title, description, url, backgroundColor} } = props;
    const [cardHover, setCardHover] = useState(false)
    const hoverIn = () => {
        setCardHover(true)
    }
    const hoverOut = () => {
        setCardHover(false)
        
    }
    const sideBarStyle = cardHover ? {width: "100%", backgroundColor: backgroundColor} : {backgroundColor: backgroundColor}

    return(
        <div onMouseOver={hoverIn} onMouseOut={hoverOut} className='experience-card'>
            <div style={sideBarStyle} className='side-color'>
                <div className={cardHover ? 'expanded-tools' : 'hidden-tools'}>
                    <img src={url} />
                    <span className={'tool-title'}>{title}</span>
                    <span className='tool-description'>{description}</span>
                </div>
                
            </div>
            <div className='card-content'>
                
            </div>
        </div>
    )
}
export default ExperienceCard;