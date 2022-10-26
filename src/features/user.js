import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    isLoggedIn: false,
    info: {
        id: null,
        username: '',
        email: '',
    },
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
        resetStatus: (state) => {
            return { ...state, status: 'idle' };
        },
    },
});

export const { logout, resetStatus } = userSlice.actions;
export default userSlice.reducer;
