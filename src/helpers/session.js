import { resetMembers } from '../slices/member';
import { resetTasks } from '../slices/task';
import { resetUser } from '../slices/user';

export const logout = (dispatch, navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
    });

    setTimeout(() => {
        dispatch(resetTasks());
        dispatch(resetMembers());
        dispatch(resetUser());
    }, 1000);
};
