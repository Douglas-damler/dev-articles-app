import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'userSession/login',

    async (details) => {
        const response = await fetch('http://localhost:4001/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        console.log(response)
        return response.status
    }
);

export const register = createAsyncThunk(
    'userSession/register',

    async (details) => {
        const response = await fetch('http://localhost:4001/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        });
        console.log(response)
        return response.status
    }
);

export const addUserFollowing = createAsyncThunk(
    'userSession/addFollowing',
    async () => {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: 'Elon Musk', lang: 'en' },
            headers: {
                'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
                'x-rapidapi-host': 'free-news.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        const data = response.data;
        const articles = data.articles;
        console.log(articles);
        return '';
    }
)

const userSessionSlice = createSlice({
    name: 'userSession',
    initialState: {
        userDetails: [],
        isLoggined: false,
        isLoadingLogin: false,
        userDoesNoExist: false,
        hasFailedToLogin: false,
        isRegistering: false,
        registrationSucess: false,
        hasFailedToRegister: false,
        registrationErrorMessage: '',
        userFollowingIsSuccessful: false
    },

    reducers: {},

    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLoggined = false;
            state.isLoadingLogin = false;
            state.hasFailedToLogin = false;
            state.userDoesNoExist = false;
        },

        [login.fulfilled]: (state, action) => {
            state.isLoadingLogin = false;
            state.hasFailedToLogin = false
            if (!action.payload.length) {
                state.userDoesNoExist = true;
                state.isLoggined = false;
            }
            if (action.payload.length) {
                state.isLoggined = true;
                state.userDoesNoExist = false;
                state.userDetails.push(action.payload);
            }
        },

        [login.rejected]: (state, action) => {
            state.isLoadingLogin = false;
            state.isLoggined = false;
            state.hasFailedToLogin = true;
            state.userDoesNoExist = false;
        },

        [register.pending]: (state, action) => {
            state.isRegistering = true;
            state.hasFailedToRegister = false;
            state.registrationSucess = false;
        },

        [register.fulfilled]: (state, action) => {
            state.isRegistering = false
            state.hasFailedToRegister = false
            console.log(action.payload);
            if (action.payload === 200) {
                state.registrationSucess = true;
            }
            if (action.payload == 400) {
                state.registrationSucess = false;
                state.registrationErrorMessage = 'A user with that email or username already exists'
            }
        },

        [register.rejected]: (state, action) => {
            state.isRegistering = false;
            state.hasFailedToRegister = true;
            state.registrationSucess = false;
        },

        [addUserFollowing.pending]: (state, action) => {
            state.userFollowingIsSuccessful = true;
        },

        [addUserFollowing.fulfilled]: (state, action) => {
            state.userFollowingIsSuccessful = true;
        },

        [addUserFollowing.rejected]: (state, action) => {
            state.userFollowingIsSuccessful = false;
        }
    }
});

export default userSessionSlice.reducer;