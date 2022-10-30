import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MemberList } from '../components/MemberList';
import { getAllMembers, resetMembersStatus } from '../features/member';
import { getAllTasks } from '../features/task';

export const Members = ({ navigation }) => {
    const memberList = useSelector((state) => state.member.membersList);
    const user = useSelector((state) => state.user);
    const taskList = useSelector((state) => state.task.taskList.tasks);
    const requestStatus = useSelector((state) => state.member.status);
    const errorMessage = useSelector((state) => state.member.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks(user));
    }, []);

    useEffect(() => {
        dispatch(getAllMembers({ token: user.token, taskList }));
    }, [taskList]);

    useEffect(() => {
        if (requestStatus === 'error') {
            Alert.alert('An issue occured', errorMessage, [
                {
                    onPress: () => {
                        dispatch(getAllTasks(user));
                    },
                    text: 'Retry',
                },
            ]);
        }

        if (requestStatus === 'resolved') {
            setTimeout(() => dispatch(resetMembersStatus()), 550);
        }
    }, [requestStatus]);

    return (
        <>
            {requestStatus !== 'idle' ? (
                <ActivityIndicator size={50} color="#f5054d" style={styles.loader} />
            ) : (
                <>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>All Members</Text>
                            <Text style={styles.headerDescription}>
                                You will find all your members here.
                            </Text>
                        </View>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.bodyTitle}>Here are all members:</Text>
                            <View style={styles.createButtonContainer}>
                                <TouchableOpacity
                                    style={styles.createButton}
                                    onPress={() => {
                                        navigation.navigate('MemberForm', { view: 'create' });
                                    }}
                                >
                                    <Text style={styles.createButtonText}>Add new</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <MemberList navigation={navigation} data={memberList} />
                    </View>
                </>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.2,
        padding: 7,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    headerDescription: {
        marginTop: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    bodyContainer: {
        flex: 0.1,
        flexDirection: 'row',
    },
    bodyTitle: {
        fontWeight: 'bold',
        fontSize: 21,
        padding: 7,
    },
    createButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    createButton: {
        width: 100,
    },
    createButtonText: {
        color: 'black',
        fontSize: 21,
        textAlign: 'right',
        textDecorationLine: 'underline',
        marginRight: 7,
    },
    loader: {
        position: 'absolute',
        top: '40%',
        left: '45%',
    },
});
