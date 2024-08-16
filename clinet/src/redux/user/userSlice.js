
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        //ere state present intianl state object and action is parameter , you can pass you can pass only one parameter

        //payload is keyword means the data yo passed.
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

// this reduceres funetion is used to change state.
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

//this export is for store to acces this lsice 
export default userSlice.reducer;