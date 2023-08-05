import React from "react";
import { Outlet } from "react-router-dom";

let Details = ()=>{
    return (<>
        <h1>Hi</h1>
        <Outlet/>
        </>
    )
}


export default Details;