import { addNewMember, updateMember } from '../api/model/memberAPI';
import { addNewTask, updateTask } from '../api/model/taskAPI';

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
