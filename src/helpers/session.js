import { resetUser } from '../slices/user';

export const logout = (dispatch, navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Landing' }],
    });

    setTimeout(() => {
        dispatch(resetUser());
    }, 1000);
};
