import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../config';

const initialState = {
    status: 'idle',
    membersList: [],
    error: '',
};

export const dropDownMemberList = (memberList) => {
    const formattedMemberList = memberList.map((member) => {
        return {
            label: member.name,
            value: member.id,
        };
    });

    return formattedMemberList;
};

export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        resetMembers: () => initialState,
        resetMembersStatus: (state) => {
            return { ...state, status: 'idle' };
        },
    },
});

export const { resetMembers, resetMembersStatus } = memberSlice.actions;
export default memberSlice.reducer;
