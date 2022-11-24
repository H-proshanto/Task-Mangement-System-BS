import axios from "axios";
import { BASE_URL } from "../config";

export const getAllTasks = async (params) => {
    const apiSubDirectory = 'tasks';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/`;
    const response = await axios({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });

    return response.data;
};