import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import './Tools.css';
import { Tool } from "../../App/App";
import Skeleton from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";




const Tools = (props: any) => {
    const {tools, load} = props;
    const height = window.innerHeight;
    
    const MapTools = () => {
        return (
          <>
            {load
              ? [1, 2, 3].map((int, i) => {
                  return <Skeleton key={i} width={250} height={300} />;
                })
              : tools !== [] &&
                tools.map((tool: Tool, i: number) => {
                  return (
                    <a key={i} className="card-link" href={`#`}>
                      <ExperienceCard tool={tool} load={load} />
                    </a>
                  );
                })}
          </>
        );
    }

    return(
        <div style={{height}} className='tool-div'>
            <div className='content'>
                <div className='tools'>
                    <MapTools />
                </div>
            </div>
        </div>
    )
}
export default Tools;

