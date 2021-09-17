import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const NavBubble = (props: any) => {
    const {id, Icon, toolTipText, iconColor, bgColor, bubbleClick} = props;
    const {
        setNodeRef, attributes, listeners, transition, transform, isDragging
    } = useSortable({id: id})
    const style = {
        transition: transition,
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0.5 : 1,
    }
    return(
        <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        //@ts-ignore
        style={style}
        >
            <a key={id} onClick={(e) => {bubbleClick(e, toolTipText)}} >
                <div 
                data-tooltip={toolTipText} 
                data-tooltip-location='bottom' 
                className='bubble'
                style={{backgroundColor: bgColor}}
                >
                    <Icon sx={{color: iconColor}} fontSize="large" />
                </div> 
            </a>
        </div>
    )
}

export default NavBubble;