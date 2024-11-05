import React from "react";
import '../stylesheets/Witness.css';



function Witness(props){
    return(
      <div className="container-witness">
        <img
            className="image-witness"
            src={require(`../images/${props.image}.png`)}
            alt="foto di emma"/>

        <div className="container-text-witness">
           <p className="name-witness"><strong>{props.name}</strong> en {props.country} </p>
           <p className="prosecution-testimony">{props.prosecution} en <strong>{props.company}</strong></p>
           <p className="text-witness">"{props.witness}"</p>
         </div>
        </div>
    );
}

export default Witness;