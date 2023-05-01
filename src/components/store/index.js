import {configureStore} from '@reduxjs/toolkit';
import authSlice from './AuthSlicer';


const store = configureStore({
    reducer:{auth:authSlice.reducer},
});

export default store;