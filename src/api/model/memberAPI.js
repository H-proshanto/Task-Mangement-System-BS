import axios from 'axios';
import { BASE_URL } from '../../config';

export const getAllMembers = async (params) => {
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
};

export const addNewMember = async (params) => {
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
};

export const updateMember = async (params) => {
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
};

export const deleteMember = async (params) => {
    const apiSubDirectory = 'members';
    const apiDirectory = 'private';
    const url = `${BASE_URL}/${apiDirectory}/${apiSubDirectory}/${params.memberId}`;
    await axios({
        method: 'DELETE',
        url,
        headers: { Authorization: `Bearer ${params.token}` },
    });
};
