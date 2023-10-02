import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../utilities/apiCaller';


export const fetchBuses = createAsyncThunk(
    'buses/fetchBuses',
    async () => {
        const buses = await publicGet('/buses');
        return buses;
    }
);
export const busesSlice = createSlice({
    name: 'buses',
    initialState:{
        buses: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBuses.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchBuses.fulfilled, (state, action) => {
                state.buses = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchBuses.rejected, (state, action) => {
                state.isLoading = true
                state.buses = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default busesSlice.reducer;