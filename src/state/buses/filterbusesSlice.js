import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterBuses } from './busesApi';


export const fetchFilterBuses = createAsyncThunk(
    'buses/fetchfilterBuses',
    async ({from,to}) => {
        const buses = await getFilterBuses(from,to)
        return buses;
    }
);
export const filterBusesSlice = createSlice({
    name: 'filterBuses',
    initialState:{
        filterBuses: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterBuses.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFilterBuses.fulfilled, (state, action) => {
                state.filterBuses = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFilterBuses.rejected, (state, action) => {
                state.isLoading = true
                state.filterBuses = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default filterBusesSlice.reducer;