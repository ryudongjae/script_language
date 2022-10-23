import React, { Children } from "react";

function Wrapper({children}){
    const style = {
        border : '2px solid black',
        padding : '32px'
    };
    return (
        <div style={style}>
        {children}
        </div>
    )
}


export default Wrapper;