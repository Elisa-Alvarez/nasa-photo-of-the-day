import React from "react";

function Photos (props){
   
    return(
        <div style={{width:`100%`}} className="photo-display">
             <img style={{width:`100%`, height:`78vh`}} src={props.picture.url} alt="space" />
            
      </div>
    )
}

export default Photos