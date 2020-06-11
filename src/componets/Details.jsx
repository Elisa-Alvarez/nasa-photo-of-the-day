import React, {useState} from "react";





function Details (props){

    
   console.log(props)
   

return(
    <div className="personDetails-container">
        <h2>{props.picture.title}</h2>
      {
    
        <>
          <p>{props.picture.title} was taken by {props.picture.copywright}</p>
          <p> Date: {props.picture.date}</p>
          
          
        </>
      }
     
    </div>
)
}

export default Details