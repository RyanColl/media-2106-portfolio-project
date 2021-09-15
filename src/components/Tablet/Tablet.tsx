

import React, { useEffect, useState } from "react";

const Tablet = (props: any) =>  {
    const {url} = props;
    const width = window.innerWidth;
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        }
    })
    
    console.log(offset);
    return(
        <div 
        className='tablet'
        >
            <img
            style={{width: (width - offset), top: 200}}
            className='img-tablet'
            src={url} 
            />
        </div>
    )
}
export default Tablet;