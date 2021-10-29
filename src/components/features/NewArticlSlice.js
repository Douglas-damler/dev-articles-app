import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postArticle = createAsyncThunk(
    'newArticle/postArticle',
    async (article) => {
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
        return article;
    }
)


const newArticleSlice = createSlice({
    name: "newArticle",
    initialState: {
        article: {
            title: "me",
            markdown:  "# This is like heavent to me ## I love Jesus ### Jesus is my personal saviour"  
        },

        isPostingNewArticle: false,
        hasFailedToPostNewArticle: false,
        hasPostedNewArticle: false
    },

    reducers: {},

    extraReducers: {
        [postArticle.pending]: (state, action) => {
            state.isPostingNewArticle = true;
            state.hasFailedToPostNewArticle = false;
            state.hasPostedNewArticle = false;
        },

        [postArticle.fulfilled]: (state, action) => {
            state.isPostingNewArticle = false;
            state.hasFailedToPostNewArticle = false;
            state.hasPostedNewArticle = true;
            state.article = action.payload;
        },

        [postArticle.rejected]: (state, action) => {
            state.isPostingNewArticle = false;
            state.hasFailedToPostNewArticle = true;
            state.hasPostedNewArticle = false;
        }
    }
});

export default newArticleSlice.reducer;