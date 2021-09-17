import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import './LandingPage.css';
import { Tool } from "../../App/App";
import Skeleton from "../Skeleton/Skeleton";
const LandingPage = (props: any) => {
    const {tools, urls, load} = props;
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
                    <a key={i} className="card-link" href={"#"}>
                      <ExperienceCard urls={urls} tool={tool} load={load} />
                    </a>
                  );
                })}
          </>
        );
    }

    return(
        <div style={{height}} className='landing-page'>
            <div className='content'>
                <div className='tools'>
                    <MapTools />
                </div>
            </div>
        </div>
    )
}
export default LandingPage;

