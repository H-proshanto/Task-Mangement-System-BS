import { addNewMember, updateMember } from '../api/memberAPI';
import { addNewTask, updateTask } from '../api/taskAPI';

export const onPressMemberForm = (view) => {
    if (view === 'create') {
        return addNewMember;
    } else {
        return updateMember;
    }
};

export const onPressTaskForm = (view) => {
    if (view === 'create') {
        return addNewTask;
    } else {
        return updateTask;
    }
};
