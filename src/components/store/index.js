import {configureStore} from '@reduxjs/toolkit';
import authSlice from './AuthSlicer';
import MailSlice from "./MailSlice";
import sentboxslice from './SentSlicer';
import inboxslice from './InboxSlicer';

const store = configureStore({
    reducer:{auth:authSlice.reducer,mail: MailSlice.reducer,sent:sentboxslice.reducer, in: inboxslice.reducer},
});

export default store;