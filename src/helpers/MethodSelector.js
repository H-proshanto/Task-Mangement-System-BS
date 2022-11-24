import { addNewMember, updateMember } from '../react-query/memberAPI';
import { addNewTask, updateTask } from '../slices/task';

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