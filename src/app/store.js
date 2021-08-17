import { configureStore } from "@reduxjs/toolkit";
import allArticlesReducer from "../components/features/allArticlesSlice";
import allCommentsReducer from "../components/features/allCommentsSlice";
import currentArticleReducer from "../components/features/currentArticleSlice";
import myArticlesReducer from "../components/features/myArticlesSlice";
import searchTermReducer from "../components/features/searchTermSlice";

export default configureStore({
    reducer: {
        allArticles: allArticlesReducer,
        comments: allCommentsReducer,
        currentArticles: currentArticleReducer,
        myArticles: myArticlesReducer,
        searchTerm: searchTermReducer
    }
});