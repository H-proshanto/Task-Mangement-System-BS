import { useMutation, useQuery } from '@tanstack/react-query';
import { onPressMemberForm } from '../../helpers/MethodSelector';
import queryClient from '../config';
import { deleteMember, getAllMembers } from '../model/memberAPI';

export const useMembersList = (token, taskList) => {
    return useQuery({
        queryKey: ['MemberList', taskList],
        queryFn: () => getAllMembers({ token, taskList }),
        enabled: !!taskList,
        staleTime: 2500,
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

export const invalidateMemberList = () => {
    queryClient.invalidateQueries({ queryKey: ['MemberList'] });
};
