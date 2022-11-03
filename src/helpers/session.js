import { resetMembers } from '../features/member';
import { resetTasks } from '../features/task';
import { resetUser } from '../features/user';

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
