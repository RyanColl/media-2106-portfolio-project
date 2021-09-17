import React, { useState } from "react";
import './NavBar.css';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import NavBubble from "./NavBubble/NavBubble";

import {DndContext, useSensor, useSensors, PointerSensor, closestCenter} from '@dnd-kit/core';
import { arrayMove, horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";



const NavBar = (props: any) => {
        const [bubbleData, setBubbleData] = useState([
          {
            id: '1',
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
            id: '2',
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
            id: '3',
            bgColor: "#2e2e2e",
            iconColor: "white",
            toolTipText: "About Me",
            bubbleClick: (e: any, toolTipText: string) => {
                //@ts-ignore
                console.log(`This is the screenx: ${e.screenX} and screen y: ${e.screenY} on tool ${toolTipText}`);
            },
            Icon: FaceSharpIcon
          }
        ]);



        // draggable
        const sensors = [useSensor(PointerSensor)]

        const handleDrag = ({active, over}: any) => {
            if(active.id !== over.id) {
                
                setBubbleData(bubbleData => {
                    const oldIndex = bubbleData.findIndex(bubble => bubble.id === active.id)
                    const newIndex = bubbleData.findIndex(bubble => bubble.id === over.id)
                    return arrayMove(bubbleData, oldIndex, newIndex)
                })
            }
        }




    return(
        <div className='navbar'>
            <div className='nav-bubble'>
                <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(e) => {handleDrag(e)}}
                >
                    <SortableContext
                    items={bubbleData}
                    strategy={horizontalListSortingStrategy}
                    >
                        {bubbleData.map(bubble => {
                            return <NavBubble {...bubble} />
                        })}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}
export default NavBar;