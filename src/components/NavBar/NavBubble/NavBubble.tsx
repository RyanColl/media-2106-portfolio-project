import React from "react";

const NavBubble = (props: any) => {
    const {Icon, toolTipText, iconColor, bgColor} = props;
    return(
        <div 
        data-tooltip={toolTipText} 
        data-tooltip-location='bottom' 
        className='bubble'
        style={{backgroundColor: bgColor}}
        >
            <Icon sx={{color: iconColor}} fontSize="large" />
        </div> 
    )
}

export default NavBubble;