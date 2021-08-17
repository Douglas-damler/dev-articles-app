import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadAllComments = createAsyncThunk(
    'comments/loadAllComments',
    async (id) => {

    }
);

export const postNewComment = createAsyncThunk(
    'comment/postComment',
    
    async() => {

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
            state.comments.push(action.payload);
        },
        
        [postNewComment.rejected]: (state, action) => {
            state.postNewCommentIsPending = false;
            state.postNewCommentHasFailed = true;
        }
    }
});

export default allCommentsSlice.reducer;