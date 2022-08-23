import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadAllComments = createAsyncThunk(
    'comments/loadAllComments',
    async (id) => {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {q: 'Elon Musk', lang: 'en'},
            headers: {
             'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
             'x-rapidapi-host': 'free-news.p.rapidapi.com'  
            }
        };
 
        const response = await axios.request(options);
        const data = response.data;
        const articles = data.articles;
        console.log(articles);
        return []
    }
);

export const postNewComment = createAsyncThunk(
    'comment/postComment',
    
    async (comment) => {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: {q: 'Elon Musk', lang: 'en'},
            headers: {
             'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
             'x-rapidapi-host': 'free-news.p.rapidapi.com'  
            }
        };
 
        const response = await axios.request(options);
        const data = response.data;
        const articles = data.articles;
        console.log(articles);
        return comment;
     }
);

const allCommentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoadingComments: false,
        failedToLoadComments: false,
        postNewCommentIsPending: false,
        postNewCommentHasFailed: false
    },

    reducers: {},

    extraReducers: {
        [loadAllComments.pending]: (state, action) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },

        [loadAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
        },

        [loadAllComments.rejected]: (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        },

        [postNewComment.pending]: (state, action) => {
            state.postNewCommentIsPending = true;
            state.postNewCommentHasFailed = false;
        },

        [postNewComment.fulfilled]: (state, action) => {
            state.postNewCommentIsPending = false;
            state.postNewCommentHasFailed = false;
            state.comments.unshift(action.payload);
        },
        
        [postNewComment.rejected]: (state, action) => {
            state.postNewCommentIsPending = false;
            state.postNewCommentHasFailed = true;
        }
    }
});

export default allCommentsSlice.reducer;