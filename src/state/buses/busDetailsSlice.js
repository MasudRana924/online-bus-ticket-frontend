import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../utilities/apiCaller';


const initialState = {
    bus:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchBus = createAsyncThunk(
    'bus/fetchBus',
    async (id) => {
        const bus = await publicGetSingle(`/bus/${id}`);
        return bus
    }
);
export const busSlice = createSlice({
    name: 'bus',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBus.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchBus.fulfilled,(state,action)=>{
          state.isLoading=false
          state.bus=action.payload;
        })
        .addCase(fetchBus.rejected,(state,action)=>{
            state.isLoading=false
            state.bus={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default busSlice.reducer;