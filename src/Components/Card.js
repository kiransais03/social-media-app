import React from "react";
// import search from "../Images/search.png";
import "../css/Card.css"
import Polygon from "../Images/polygon.png"


let Card = (props)=>{
    // console.log(props.elemobj);
    let imglink =`https://picsum.photos/200?random=${props.elemobj.id}`;
    return (<>
        <div className="card-div card mb-3 col">
        <img className="p-2" src={imglink} alt="img"/>
      <div className="card-body">
        <h5 className="card-title">{props.elemobj.title}</h5>
        <div className="para-div">
        <p className="card-text paratext">{props.elemobj.body}</p>
        <span className="readmore">Readmore...</span>
       <span><img className="polygon" src={Polygon} alt="search"/></span>
       </div>
      </div>
        </div>
        </>
    )
}


export default Card;
