import {GET_FETCHING,GET_SUCCESS,GET_FAILURE} from "./actionTypes";
import axios from "axios";

export const fetching=()=>{
    return (
        {type : GET_FETCHING}
    )
}

export const success=(response)=>{
    return (
        {
            type:GET_SUCCESS,
            payload:response,
        }
    )
}

export const failure=(error)=>{
    return (
        {
            type:GET_FAILURE,
            payload:error,
        }
    )
}

export const getapicall = ()=>{
    return (async (dispatch)=>{
        try{
        dispatch(fetching());
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        console.log(response.data);
        dispatch(success(response.data));
        }
        catch(error) {
            console.log(error.message);
            dispatch(failure(error.message));
        }
    })
}