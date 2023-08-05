import {SELECTED_IMG} from './actionTypes';


export function selectedimage(elemobj){

    console.log(elemobj,"seletded thing")
    return {
        type:SELECTED_IMG,
        payload:elemobj
    }
}