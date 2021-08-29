import { configureStore } from "@reduxjs/toolkit";
import allArticlesReducer from "../components/features/allArticlesSlice";
import allCommentsReducer from "../components/features/allCommentsSlice";
import myArticlesReducer from "../components/features/myArticlesSlice";
import searchTermReducer from "../components/features/searchTermSlice";
import userSessionReducer from "../components/features/userSessionSlice";

export default configureStore({
    reducer: {
        allArticles: allArticlesReducer,
        comments: allCommentsReducer,
        myArticles: myArticlesReducer,
        searchTerm: searchTermReducer,
        userSession: userSessionReducer
    }
});