import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sentbox : []
}

const sentboxslice = createSlice({
    name:'sentbox',
    initialState:initialState,
    reducers:{
        setsenbox(state,action){
            state.sentbox = action.payload
        }
    }
})


export const  sentboxAction = sentboxslice.actions;
export default sentboxslice;