export const memberTaskList = (memberId, taskList = []) => {
    return taskList.filter((task) => task.memberId === memberId);
};
