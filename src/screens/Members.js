import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MemberList } from '../components/MemberList';
import { getAllMembers, resetMemberStatus } from '../features/member';

export const Members = ({ navigation }) => {
    const token = useSelector((state) => state.user.token);
    const taskList = useSelector((state) => state.task.taskList.tasks);

    const dispatch = useDispatch();
    const requestStatus = useSelector((state) => state.member.status);

    useEffect(() => {
        dispatch(getAllMembers({ token, taskList }));
    }, []);

    useEffect(() => {
        if (requestStatus === 'resolved') {
            dispatch(resetMemberStatus());
        }
    }, [requestStatus]);

    return (
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
                <MemberList navigation={navigation} />
            </View>
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
});
