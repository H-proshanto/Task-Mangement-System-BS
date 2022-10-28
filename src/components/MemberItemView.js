import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const MemberItemView = ({ memberId, memberName, memberTasks, navigation }) => {
    return (
        <View style={styles.todoConatainer}>
            <TouchableOpacity
                style={styles.titleContainer}
                onPress={() =>
                    navigation.navigate('MemberView', {
                        memberName,
                        memberId,
                    })
                }
            >
                <Text style={styles.taskText}>{memberName}</Text>
            </TouchableOpacity>
            <Text style={styles.taskCount}>{`Tasks: ${memberTasks}`}</Text>

            <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => {
                    navigation.navigate('MemberForm', {
                        memberName,
                        memberId,
                        view: 'update',
                    });
                }}
            >
                <Image style={styles.icon} source={require('../assets/edit.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 0.8,
        borderRadius: 8,
        padding: 10,
    },
    todoConatainer: {
        margin: 21,
        borderRadius: 15,
        backgroundColor: '#eeeeee',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    updateBtn: {
        height: 35,
        width: 35,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    taskCount: {
        alignSelf: 'center',
        fontSize: 13,
        color: 'grey',
        fontStyle: 'italic',
        marginRight: 7,
    },
    taskText: {
        textAlign: 'left',
    },
});
