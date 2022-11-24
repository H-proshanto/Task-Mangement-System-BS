import { useMutation, useQuery } from '@tanstack/react-query';
import { onPressMemberForm, onPressTaskForm } from '../helpers/MethodSelector';
import { deleteMember, getAllMembers } from './memberAPI';
import { deleteTask, getAllTasks } from './taskAPI';

export const useTasksList = (token) => {
    return useQuery({
        queryKey: ['TaskList'],
        queryFn: () => getAllTasks({ token }),
    });
};

export const useMembersList = (token, taskList) => {
    return useQuery({
        queryKey: ['MemberList'],
        queryFn: () => getAllMembers({ token, taskList }),
        enabled: !!taskList,
    });
};

export const useMemberFormMutation = (view, token, memberName, memberId) => {
    return useMutation({
        mutationFn: () => onPressMemberForm(view)({ token, memberName, memberId }),
    });
};

export const useMemberMutation = (token, memberId) => {
    return useMutation({
        mutationFn: () => deleteMember({ token, memberId }),
    });
};

export const useTaskFormMutation = (view, token, title, description, taskId, memberId) => {
    return useMutation({
        mutationFn: () => onPressTaskForm(view)({ token, title, description, taskId, memberId }),
    });
};
export const useTaskMutation = (token, taskId) => {
    return useMutation({
        mutationFn: () => deleteTask({ token, taskId }),
    });
};
