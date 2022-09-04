import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllArticles = createAsyncThunk(
    'allArtilces/loadArticles',
    async () => {
       var axios = require("axios").default;
       var options = {
           method: 'GET',
           url: 'https://free-news.p.rapidapi.com/v1/search',
           params: {q: 'News', lang: 'en'},
           headers: {
            'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
            'x-rapidapi-host': 'free-news.p.rapidapi.com'  
           }
       };

       const response = await axios.request(options);
       const data = response.data;
       const articles = data.articles;
       return articles; 
    }
);

const allArticlesSlice = createSlice({
    name: "allArticles",
    initialState: {
        articles: [],
        isLoadingArticles: false,
        failedToLoadArticles: false
    },
    reducers: {},

    extraReducers: {
        [loadAllArticles.pending]: (state, action) => {
            state.isLoadingArticles = true;
            state.failedToLoadArticles = false;
        },

        [loadAllArticles.fulfilled]: (state, action) => {
            state.articles = action.payload;
            state.isLoadingArticles = false;
            state.failedToLoadArticles = false;
        },

        [loadAllArticles.rejected]: (state, action) => {
            state.isLoadingArticles = true;
            state.failedToLoadArticles = false
        }
    }
});

export default allArticlesSlice.reducer;