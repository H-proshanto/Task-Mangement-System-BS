import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUI } from '../components/ButtonUI';
import { deleteTask, resetTaskStatus } from '../features/task';
import { logout } from '../helpers/session';

export const TaskView = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const requestStatus = useSelector((state) => state.task.status);
    const errorMessage = useSelector((state) => state.task.error);
    const { title, description, todoId, memberName, memberId } = route.params;

    const confimationWindow = () => {
        Alert.alert('Are you sure you want to delete this task', '', [
            {
                text: 'Confirm',
                style: 'destructive',
                onPress: () => {
                    dispatch(deleteTask({ token, taskId: todoId }));
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
                dispatch(resetTaskStatus());
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
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Description</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.memberContainer}>
                <Text style={styles.memberText}>Assigned to :</Text>
                <Text style={styles.member}>{memberName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonUI
                    title="Edit"
                    bodyStyle={styles.editContainer}
                    buttonStyle={styles.editButton}
                    textStyle={styles.editText}
                    onPress={() => {
                        navigation.navigate('TaskForm', {
                            title,
                            description,
                            todoId,
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
                    loaderSize={31}
                />
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
    memberContainer: {
        flex: 0.2,
        padding: 7,
    },
    memberText: {
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
        marginTop: 32,
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
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
