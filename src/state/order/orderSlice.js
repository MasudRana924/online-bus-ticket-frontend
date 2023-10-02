import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../utilities/apiCaller";



const initialState={
   bookingss:[],
    isLoading:false,
    isError:false,
    error:''
}

export const createBookings=createAsyncThunk(
    'bookings/createbookings',async({data,userToken}, { rejectWithValue })=>{

        try {
            const bookingss = await privatePost('/order/new',userToken, data);
            return bookingss;
        } catch (err) {
            return rejectWithValue(err);
        }
   
 
});
const bookingssSlice=createSlice({
    name:'bookings',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(createBookings.pending, (state, action) => {
                state.isLoading = true;
                state.isError = true
            })
            .addCase(createBookings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.bookingss.push(action.payload);
            })
            .addCase(createBookings.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message
            })
           
    }
});

export default bookingssSlice.reducer; 