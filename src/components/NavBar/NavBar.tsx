import React, { useEffect } from "react";
import './NavBar.css';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import NavBubble from "./NavBubble/NavBubble";



const NavBar = (props: any) => {
    
        const bubbleClick = (event: any, name: string) => {
          
        };
        const bubbleData = [
          {
            bgColor: "#2FF3E0",
            iconColor: "#2e2e2e",
            toolTipText: "Apps",
            bubbleClick: (e: any, toolTipText: string) => {
                //@ts-ignore
                console.log(`This is the screenx: ${e.screenX} and screen y: ${e.screenY} on tool ${toolTipText}`);
            },
            Icon: AppsSharpIcon
          },
          {
            bgColor: "#F51720",
            iconColor: "#2e2e2e",
            toolTipText: "Tools",
            bubbleClick: (e: any, toolTipText: string) => {
                //@ts-ignore
                console.log(`This is the screenx: ${e.screenX} and screen y: ${e.screenY} on tool ${toolTipText}`);
            },
            Icon: BuildSharpIcon
          },
          {
            bgColor: "white",
            iconColor: "#2e2e2e",
            toolTipText: "About Me",
            bubbleClick: (e: any, toolTipText: string) => {
                //@ts-ignore
                console.log(`This is the screenx: ${e.screenX} and screen y: ${e.screenY} on tool ${toolTipText}`);
            },
            Icon: FaceSharpIcon
          }
        ];
    return(
        <div className='navbar'>
            <div className='nav-bubble'>
                {bubbleData.map(bubble => {
                    const {bgColor, iconColor, toolTipText, bubbleClick, Icon} = bubble;
                    return (<a onClick={(e) => {bubbleClick(e, toolTipText)}} ><NavBubble bgColor={bgColor} iconColor={iconColor} toolTipText={toolTipText} Icon={Icon} /></a>)
                })}
                </div>
        </div>
    )
}
export default NavBar;