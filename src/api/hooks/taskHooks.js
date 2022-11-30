import { useMutation, useQuery } from '@tanstack/react-query';
import { onPressTaskForm } from '../../helpers/MethodSelector';
import queryClient from '../config';
import { deleteTask, getAllTasks } from '../model/taskAPI';

export const useTasksList = (token) => {
    return useQuery({
        queryKey: ['TaskList'],
        queryFn: () => getAllTasks({ token }),
        staleTime: 2500,
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

export const invalidateTaskList = () => {
    queryClient.invalidateQueries({ queryKey: ['TaskList'] });
};
