import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inbox: []
}

const inboxslice = createSlice({
    name: 'inbox',
    initialState: initialState,
    reducers:{
        setinbox(state, action){
            state.inbox = action.payload
        }
    }
})

export const inboxAction = inboxslice.actions;

export default inboxslice;