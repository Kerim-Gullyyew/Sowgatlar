import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { backendUrl } from '../../../rootUrl';

const bannerUrl = backendUrl + "/api/product/banners/?is_main=false";

const initialState = {
    isLoading: false,
    isSuccess: false,
    banner: []
}

export const getBanner = createAsyncThunk(
    "banner/getBanner",
    async (arg, { rejectWithValue }) => {
        const cancelToken = axios.CancelToken.source()
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            
            const { data } = await axios.get(bannerUrl, {cancelToken:cancelToken.token,});
            return data;  

        } catch (err) {
            if (!err.response) {
                throw err
            }
            rejectWithValue(err.response.data)
        }
        return () =>{
            cancelToken.cancel()
        }
    }
)

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers: {
        [getBanner.pending]: (state) => {
            state.isLoading = true;
        },
        [getBanner.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.banner = payload['data'];
            state.isSuccess = true;
        },
        [getBanner.rejected]: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
        }
    }
})

export default bannerSlice.reducer;