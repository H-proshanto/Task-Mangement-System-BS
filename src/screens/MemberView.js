import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUI } from '../components/ButtonUI';
import { TaskList } from '../components/TaskList';
import { deleteMember, memberTaskList, resetMembersStatus } from '../features/member';
import { logout } from '../helpers/sessionHelpers';

export const MemberView = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const taskList = useSelector((state) => state.task.taskList.tasks);
    const requestStatus = useSelector((state) => state.member.status);
    const errorMessage = useSelector((state) => state.member.error);
    const { memberName, memberId } = route.params;
    const data = memberTaskList(memberId, taskList);

    const confimationWindow = () => {
        Alert.alert('Are you sure you want to delete this task', '', [
            {
                text: 'Confirm',
                style: 'destructive',
                onPress: () => {
                    dispatch(deleteMember({ token, memberId }));
                },
            },
            {
                text: 'Cancel',
            },
        ]);
    };

    useEffect(() => {
        if (requestStatus === 'error') {
            if (errorMessage.includes('401')) {
                Alert.alert('An issue occured', 'Session expired. Please Log In again');
                logout(dispatch, navigation);
            } else {
                Alert.alert('An issue occured', errorMessage, [
                    {
                        text: 'Okay',
                    },
                ]);
                dispatch(resetMembersStatus());
            }
        }

        if (requestStatus === 'resolved') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DashBoard' }],
            });
        }
    }, [requestStatus]);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Name</Text>
                <Text style={styles.title}>{memberName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonUI
                    title="Edit"
                    bodyStyle={styles.editContainer}
                    buttonStyle={styles.editButton}
                    textStyle={styles.editText}
                    onPress={() => {
                        navigation.navigate('MemberForm', {
                            memberName,
                            memberId,
                            view: 'update',
                        });
                    }}
                    isLoading={false}
                    loaderStyle={styles.loaderStyle}
                    loaderSize={32}
                />
                <ButtonUI
                    title="Delete"
                    bodyStyle={styles.editContainer}
                    buttonStyle={styles.deleteButton}
                    textStyle={styles.editText}
                    onPress={confimationWindow}
                    isLoading={requestStatus !== 'idle'}
                    loaderStyle={styles.loaderStyle}
                    loaderSize={32}
                />
            </View>
            <View style={styles.TaskContainer}>
                <Text style={styles.TaskText}>Tasks :</Text>
                <TaskList navigation={navigation} data={data} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 25,
        flex: 0.2,
        padding: 7,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    descriptionContainer: {
        flex: 0.2,
        padding: 7,
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
    },
    description: {
        marginTop: 15,
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    TaskContainer: {
        flex: 0.65,
        padding: 7,
    },
    TaskText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
    },
    member: {
        marginTop: 15,
        marginLeft: 20,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    editContainer: {
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#A261C5',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 7,
        paddingTop: 7,
        borderRadius: 20,
    },
    editText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingLeft: 45,
        paddingRight: 45,
        paddingBottom: 7,
        paddingTop: 7,
        borderRadius: 20,
    },
    loaderStyle: {
        paddingLeft: 11,
        paddingRight: 11,
    },
    buttonContainer: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
