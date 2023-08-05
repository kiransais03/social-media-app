import {GET_FETCHING,GET_SUCCESS,GET_FAILURE} from "../actions/actionTypes";

const initialstate={
    fetching:false,
    success:"",
    failure:"",
}

let getapiReducer = (state=initialstate,actionobj)=>{
  switch (actionobj.type)
  {
    case GET_FETCHING:return {...state,fetching:true,success:"",failure:""};

    case GET_SUCCESS : return {...state,fetching:false,success:actionobj.payload,failure:""};

    case GET_FAILURE : return {...state,fetching:false,success:"",failure:actionobj.payload};

    default:return initialstate;
  }
}


export default getapiReducer;