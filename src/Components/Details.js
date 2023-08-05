import React from "react";
import { Outlet } from "react-router-dom";

let Details = (props)=>{
    console.log(props,"props is this")
    return (<>
        <h1>Details</h1>
        <Outlet/>
        {props.children}
        </>
    )
}


export default Details;