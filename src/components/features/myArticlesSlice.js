import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadMyArticles = createAsyncThunk(
    'myArticles/loadMyArticles',

    async () => {

    }
);

export const postCommentRequest = createAsyncThunk(
    'myArticles/postArticle',

    async (article) => {
        
    }
);

const myArticlesSlice = createSlice({
    name: 'myArticles',
    initialState: {
        articles: [],
        isLoadingMyArticles: false,
        failedToLoadMyArticles: false,
        postArticleIsPending: false,
        failedToPostArticle: false
    },

    reducers: {},

    extraReducers: {
        [loadMyArticles.pending]: (state, action) => {
            state.isLoadingMyArticles = true;
            state.failedToLoadMyArticles = false;
        },

        [loadMyArticles.fulfilled]: (state, action) => {
            state.isLoadingMyArticles = false;
            state.failedToLoadMyArticles = false;
            state.articles = action.payload;
        },

        [loadMyArticles.rejected]: (state, action) => {
            state.isLoadingMyArticles = false;
            state.failedToLoadMyArticles = true;
        },

        [postCommentRequest.pending]: (state, action) => {
            state.postArticleIsPending = true;
            state.failedToPostArticle = false;
        },

        [postCommentRequest.fulfilled]: (state, action) => {
            state.postArticleIsPending = false;
            state.failedToPostArticle = false;
            state.articles.push(action.payload);
        },

        [postCommentRequest.rejected]: (state, action) => {
            state.postArticleIsPending = false;
            state.failedToPostArticle = true;
        }
    },
});

export default myArticlesSlice.reducer;
