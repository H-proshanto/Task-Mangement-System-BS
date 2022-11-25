import axios from 'axios';
import { BASE_URL } from '../../config';

export const getAllTasks = async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data.tasks;
};

export const addNewTask = async (params) => {
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
};

export const updateTask = async (params) => {
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
};

export const deleteTask = async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.taskId}`;
    await axios({
        method: 'DELETE',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });
};
