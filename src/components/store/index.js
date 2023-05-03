import {configureStore} from '@reduxjs/toolkit';
import authSlice from './AuthSlicer';
import MailSlice from "./MailSlice";
import sentboxslice from './SentSlicer';

const store = configureStore({
    reducer:{auth:authSlice.reducer,mail: MailSlice.reducer,sent:sentboxslice.reducer},
});

export default store;