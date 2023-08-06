import React, { useEffect } from "react";
import search from "../Images/search.png";
import "../css/Home.css";
import {getapicall} from "../redux/actions/getapiActions";
import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import {useNavigate} from "react-router-dom"
import { selectedimage } from "../redux/actions/selectedimgAction";

let Home = ()=>{
    let state = useSelector((currstateobj)=>{{console.log(currstateobj,"newstate") }return currstateobj.getapiReducer})
   console.log(state)


    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getapicall());
    },[])

    let navigate1 = useNavigate();

    function selectobj(elemobj){
        dispatch(selectedimage(elemobj));
          navigate1(`/item/${elemobj.id}`);
   }


    return (<>
        <h2 className="ms-3 pageheading">Social Media For Travellers</h2>
        <div className="search-div p-1">
            <img className="p-2" src={search} alt="search"/>
           <input className="search-ip" type="search" placeholder="Search here..."/>
        </div>

        {/* //loader */}
        {state.fetching && <div class="d-flex justify-content-center"><div class="spinner-border" style={{width: "4rem", height: "4rem",role:"status"}}>
  <span class="visually-hidden">Loading...</span> </div> </div>}

        <div className="items-container">
            {state && state.success && state.success.map((elemobj,index,arr)=>{
                // console.log("running",state)
                return (<div key={elemobj.id} onClick={()=>selectobj(elemobj)} className="cardwrap-div"> <Card elemobj={elemobj}/> </div>)
            })}
        </div>
        </>
    )
        }

export default Home;