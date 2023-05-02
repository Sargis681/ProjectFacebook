import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postSlices/postSlices";

const store=configureStore({
    reducer:{
        post:postReducer
    }
})
export default store