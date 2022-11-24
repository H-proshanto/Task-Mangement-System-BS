import { useMutation, useQuery } from "@tanstack/react-query";
import { onPressMemberForm } from "../helpers/MethodSelector";
import { deleteMember, getAllMembers } from "./memberAPI";
import { getAllTasks } from "./taskAPI";

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

}

export const useMemberMutation = (token, memberId) => {
    return useMutation({
        mutationFn: () => deleteMember({ token, memberId }),
    });
};
