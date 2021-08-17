import { createSlice, current } from "@reduxjs/toolkit";

const currentArticleSlice = createSlice({
    name: 'currentArticles',
    initialState: [],
    reducers: {
        addCurrentArticle: (state, action) => {
            state[0] = action.payload;
        },

        removeCurrentArticle: (state, action) => {
            state[0] = []
        }
    }
});

export default currentArticleSlice.reducer;
export const { addCurrentArticle, removeCurrentArticle } = currentArticleSlice.actions;