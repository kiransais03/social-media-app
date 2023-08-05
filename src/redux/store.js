import React from "react"
import {createStore} from "redux"
import getapiReducer from "./reducer/getapiReducer";
import selectedimgReducer from "./reducer/selectedimgReducer"
import thunk from "redux-thunk";
import { applyMiddleware,combineReducers } from "redux";

const finalreducer = combineReducers({
    getapiReducer:getapiReducer,
    selectedimgReducer:selectedimgReducer,
})

let store = createStore(finalreducer,applyMiddleware(thunk));


export default store;