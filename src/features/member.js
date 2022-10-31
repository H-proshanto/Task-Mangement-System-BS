import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../config';

const initialState = {
    status: 'idle',
    membersList: [],
    error: '',
};

export const getAllMembers = createAsyncThunk('member/getAllMembers', async (params) => {
    const apiSubDirectory = 'members';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });
    const memberList = response.data.members;

    const newMemberList = memberList.map((member) => {
        const taskCount = params.taskList.reduce((count, task) => {
            if (member.id === task.memberId) {
                count++;
            }

            return count;
        }, 0);

        member.taskCount = taskCount;
        return member;
    });

    return newMemberList;
});

export const addNewMember = createAsyncThunk('task/addNewMember', async (params) => {
    const apiSubDirectory = 'members';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    await axios({
        method: 'POST',
        url,
        headers: { Authorization: `Bearer ${params.token}`, 'Content-Type': 'application/json' },
        data: {
            name: params.memberName,
        },
    });
});

export const updateMember = createAsyncThunk('task/updateMember', async (params) => {
    const apiSubDirectory = 'members';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.memberId}`;
    await axios({
        method: 'PATCH',
        url,
        headers: { Authorization: `Bearer ${params.token}`, 'Content-Type': 'application/json' },
        data: {
            name: params.memberName,
        },
    });
});

export const deleteMember = createAsyncThunk('task/deleteMember', async (params) => {
    const apiSubDirectory = 'members';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.memberId}`;
    await axios({
        method: 'DELETE',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });
});

export const dropDownMemberList = (memberList) => {
    const formattedMemberList = memberList.map((member) => {
        return {
            label: member.name,
            value: member.id,
        };
    });

    return formattedMemberList;
};

export const memberTaskList = (memberId, taskList) => {
    return taskList.filter((task) => task.memberId === memberId);
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
    extraReducers: (builder) => {
        builder
            .addCase(getAllMembers.pending, (state) => {
                state.status = 'running';
            })
            .addCase(getAllMembers.fulfilled, (state, action) => {
                state.membersList = action.payload;
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(getAllMembers.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(addNewMember.pending, (state) => {
                state.status = 'running';
            })
            .addCase(addNewMember.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(addNewMember.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(updateMember.pending, (state) => {
                state.status = 'running';
            })
            .addCase(updateMember.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(updateMember.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(deleteMember.pending, (state) => {
                state.status = 'running';
            })
            .addCase(deleteMember.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(deleteMember.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            });
    },
});

export const { resetMembers, resetMembersStatus } = memberSlice.actions;
export default memberSlice.reducer;
