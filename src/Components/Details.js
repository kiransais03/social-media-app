import React from "react";
import { Outlet } from "react-router-dom";

let Details = (props)=>{
    console.log(props,"props is this")
    return (<>
        <h1>Details</h1>

        <h2>Select Any Image Card In Home To View Details Here...</h2>
        <Outlet/>
        {props.children}
        </>
    )
}


export default Details;