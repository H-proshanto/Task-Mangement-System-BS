export const memberTaskList = (memberId, taskList = []) => {
    return taskList.filter((task) => task.memberId === memberId);
};

export const dropDownMemberList = (memberList = []) => {
    const formattedMemberList = memberList.map((member) => {
        return {
            label: member.name,
            value: member.id,
        };
    });

    return formattedMemberList;
};
