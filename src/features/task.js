import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../config';

const initialState = {
    status: 'idle',
    taskList: [],
    error: '',
};

export const getAllTasks = createAsyncThunk('task/getAllTasks', async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
});

export const getSingleTask = async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    console.log(params);
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.todoId}`;
    const response = await axios({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
};

export const addNewTask = createAsyncThunk('task/addNewTask', async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    await axios({
        method: 'POST',
        url,
        headers: { Authorization: `Bearer ${params.token}`, 'Content-Type': 'application/json' },
        data: {
            title: params.title,
            description: params.description,
            memberId: params.memberId,
        },
    });
});

export const updateTask = createAsyncThunk('task/updateTask', async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.taskId}`;
    await axios({
        method: 'PATCH',
        url,
        headers: { Authorization: `Bearer ${params.token}`, 'Content-Type': 'application/json' },
        data: {
            title: params.title,
            description: params.description,
            memberId: params.memberId,
        },
    });
});

export const deleteTask = createAsyncThunk('task/deleteTask', async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.taskId}`;
    await axios({
        method: 'DELETE',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });
});

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        resetTasks: () => initialState,
        resetTaskStatus: (state) => {
            return { ...state, status: 'idle' };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasks.pending, (state) => {
                state.status = 'running';
            })
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.taskList = action.payload;
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(getAllTasks.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(addNewTask.pending, (state) => {
                state.status = 'running';
            })
            .addCase(addNewTask.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(addNewTask.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(updateTask.pending, (state) => {
                state.status = 'running';
            })
            .addCase(updateTask.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            })
            .addCase(deleteTask.pending, (state) => {
                state.status = 'running';
            })
            .addCase(deleteTask.fulfilled, (state) => {
                state.error = '';
                state.status = 'resolved';
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.error = action.error?.message;
                state.status = 'error';
            });
    },
});

export const { resetTasks, resetTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
