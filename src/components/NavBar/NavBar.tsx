import React, { useState } from "react";
import './NavBar.css';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import NavBubble from "./NavBubble/NavBubble";
import HomeIcon from '@mui/icons-material/Home';
import {DndContext, useSensor, useSensors, PointerSensor, closestCenter} from '@dnd-kit/core';
import { arrayMove, verticalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";

const NavBar = (props: any) => {
    const {bgChange} = props;
        const [bubbleData, setBubbleData] = useState([
          {
            id: '1',
            bgColor: '#2F6BC7',
            iconColor: 'white',
            toolTipText: 'Home',
            bubbleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, toolTipText: string) => {
                bgChange(toolTipText)
            },
            Icon: HomeIcon
          },
          {
            id: '2',
            bgColor: "#2FF3E0",
            iconColor: "#2e2e2e",
            toolTipText: "Apps",
            bubbleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, toolTipText: string) => {
                bgChange(toolTipText)
            },
            Icon: AppsSharpIcon
          },
          {
            id: '3',
            bgColor: "#F51720",
            iconColor: "#2e2e2e",
            toolTipText: "Tools",
            bubbleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, toolTipText: string) => {
                bgChange(toolTipText)
            },
            Icon: BuildSharpIcon
          },
          {
            id: '4',
            bgColor: "#2e2e2e",
            iconColor: "white",
            toolTipText: "About",
            bubbleClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, toolTipText: string) => {
                bgChange(toolTipText)
            },
            Icon: FaceSharpIcon
          },
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
                onDragOver={(e) => {handleDrag(e)}}
                autoScroll={false}
                >
                    <SortableContext
                    items={bubbleData}
                    strategy={verticalListSortingStrategy}
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