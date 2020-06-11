import React from "react";

function Photos (props){
   
    return(
        <div className="photo-display">
             <img src={props.picture.url} alt="space" />
            
      </div>
    )
}

export default Photos