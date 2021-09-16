import React from "react";
import './Skeleton.css';
const Skeleton = (props: any) => {
    const {width, height} = props;
    return(
        <div className='skeleton' style={{width, height}}></div>
    )
}
export default Skeleton;