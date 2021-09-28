import React, {useState, useEffect} from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import './Tools.css';
import { Tool } from "../../Services/Data";
import Skeleton from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";
const emptyObj = {};
const Tools = (props: any) => {
    const {tools, load} = props;
    const height = window.innerHeight;
    // initalize empty display tool
    const [displayedTool, setDisplayTool]= useState(emptyObj)

    // initialize state for the classname on tool for transition
    const [cardLinkClass, setCardLinkClass] = useState('card-link')

    // clicking on nav-tool bar
    const toolNavClick = (tool: Tool) => {
      setDisplayTool(tool);
      setCardLinkClass('card-link');
      setTimeout(() => {
        setCardLinkClass('card-link display')
      }, 500);
    }
    // displaying our experience card
    const MapTools = () => {
        return (
          <>
            {load
              ? [1, 2, 3].map((int, i) => {
                  return <Skeleton key={i} width={250} height={300} />;
                })
              : displayedTool !== emptyObj &&
              <a className={cardLinkClass} href={`#`}>
                  <ExperienceCard tool={displayedTool} load={load} />
              </a>
            }
          </>
        );
    }
    // going to add sub nav bar that holds all of the symbols and when you click on one the card for it shows up
    const NavMap = () => {
      return(
        <div className='nav-tool-map'>
            {tools.map((tool: Tool, i: number) => {
              return (
                <a key={i} href='#' onClick={() => {toolNavClick(tool)}}>
                  <img src={tool.url} style={{width: 50}}/>
                </a>
              );
            })}
        </div>
      )
    }

    return(
      
        <div style={{height}} className='tool-div'>
            <NavMap />
            <div className='content'>
                <div className='tools'>
                    <MapTools />
                </div>
            </div>
        </div>
    )
}
export default Tools;

