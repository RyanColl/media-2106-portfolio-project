import React, { useState } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import './LandingPage.css';
import { Tool } from "../../App/App";
const LandingPage = (props: any) => {
    const {tools, urls, load} = props;
    const height = window.innerHeight;
    return(
        <div style={{height}} className='landing-page'>
            <div className='content'>
                <div className='tools'>
                    {(tools != []) && tools.map((tool: Tool, i: number) => {
                        return(
                            <a
                            key={i}
                            className='card-link'
                            href={'#'}
                            >
                                <ExperienceCard
                                    urls={urls}
                                    tool={tool}
                                    load={load}
                                />
                            </a>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}
export default LandingPage;