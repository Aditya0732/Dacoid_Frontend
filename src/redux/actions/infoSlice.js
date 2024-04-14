import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loader: false,
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload;
        },
    },
});

export const { setLoader } = infoSlice.actions;

export default infoSlice.reducer;
