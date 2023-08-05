import {SELECTED_IMG} from '../actions/actionTypes';


let initialState=null;


const postReducer=(state=initialState,action)=>{
     
    switch(action.type){
        case SELECTED_IMG:
            return action.payload;
        default:
           return state;
    }
}


export default postReducer;