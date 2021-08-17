import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },

        clearSearchTerm: (state, action) => {
            return '';
        }
    }
});

export default searchTermSlice.reducer;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;