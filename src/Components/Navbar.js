import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import home from "../Images/home.png"
import notifications from "../Images/notifications.png";
import account from "../Images/account.png";
import details from "../Images/details.png";
import "../css/Navbar.css"

let Navbar = ()=>{

useEffect(()=>{
    const images = document.querySelectorAll('.nav-centrediv img');

    images.forEach(image => {image.className='my-2 mx-4';}); },[])

    return (
        <>
        <div className="navbardiv shadow-lg mb-3">
          <h4 className="ms-3">TravelMedia.in</h4>
            <div className="nav-centrediv">
            <NavLink to="/"> <img src={home} alt="home"/> </NavLink> 
            <NavLink to="/notifications">   <img src={notifications} alt="notifications"/> </NavLink> 
            <NavLink to="/item">    <img src={details} alt="details"/> </NavLink> 
            <NavLink to="/account">   <img src={account} alt="account"/> </NavLink> 
             </div>
             <h1 style={{visibility:"hidden"}}>TravelMedia.in</h1>
        </div>
        </>
    )
}


export default Navbar;