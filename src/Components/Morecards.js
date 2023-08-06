import React, { useEffect } from "react";
import search from "../Images/search.png";
import "../css/Morecards.css";
import {getapicall} from "../redux/actions/getapiActions";
import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import {useNavigate} from "react-router-dom"
import { selectedimage } from "../redux/actions/selectedimgAction";

let Morecards = ()=>{
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
        <div className="items-container">
            {state && state.success && state.success.map((elemobj,index,arr)=>{
                // console.log("running",state)
                return (<div key={elemobj.id} onClick={()=>selectobj(elemobj)} className="cardwrap-div"> <Card elemobj={elemobj}/> </div>)
            })}
        </div>
        </>
    )
}


export default Morecards;