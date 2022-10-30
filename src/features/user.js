import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../config';

const initialState = {
    status: 'idle',
    isLoggedIn: false,
    info: {
        id: null,
        username: '',
        email: '',
    },
    token: null,
    error: '',
};

export const login = createAsyncThunk('user/login', async (params) => {
    const apiSubDirectory = 'login';
    const apiDirectory = 'public';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        data: {
            email: params.email,
            password: params.password,
        },
    });

    return response.data;
});

export const registration = createAsyncThunk('user/registration', async (params) => {
    const apiSubDirectory = 'register';
    const apiDirectory = 'public';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        data: {
            name: params.name,
            email: params.email,
            password: params.password,
            password2: params.password2,
        },
    });

    return response.data;
});

const errorParser = (errorMessage) => {
    if (errorMessage.includes('400')) {
        return 'User not found';
    }

    if (errorMessage.includes('401')) {
        return 'Incorrect Password';
    }

    if (errorMessage.includes('403')) {
        return 'Email already exists';
    }

    return 'Unexpected error';
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
        resetUserStatus: (state) => {
            return { ...state, status: 'idle' };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'running';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.info = action.payload.user;
                state.token = action.payload.token;
                state.error = '';
                state.isLoggedIn = true;
                state.status = 'resolved';
            })
            .addCase(login.rejected, (state, action) => {
                state.info = {};
                state.error = errorParser(action.error?.message);
                state.isLoggedIn = false;
                state.status = 'error';
                state.token = null;
            })
            .addCase(registration.pending, (state) => {
                state.status = 'running';
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.info = action.payload.user;
                state.token = action.payload.token;
                state.error = '';
                state.isLoggedIn = true;
                state.status = 'resolved';
            })
            .addCase(registration.rejected, (state, action) => {
                state.info = {};
                state.error = errorParser(action.error?.message);
                state.isLoggedIn = false;
                state.status = 'error';
                state.token = null;
            });
    },
});

export const { logout, resetUserStatus } = userSlice.actions;
export default userSlice.reducer;
