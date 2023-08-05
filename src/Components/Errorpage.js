import React from "react";
import img404 from "../Images/404-tab-cartoon_114341-28.jpg";
import "../css/Errorpage.css";
import { Helmet } from "react-helmet-async";
import bootstrap from 'bootstrap'


let Errorpage = ()=>{
    
    return (<div className="App">
        <Helmet>
            <title>404 Error-Page not found</title>
        </Helmet>

        <div className="errordiv">
           <img className="errorimg img-fluid" src={img404} alt="404 Error,Page Not Found"/>
       </div>
       </div>
    )
}


export default Errorpage;