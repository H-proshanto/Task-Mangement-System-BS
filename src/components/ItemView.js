import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ItemView = ({ todoId, title, description, timeStamp, navigation }) => {
    return (
        <View style={styles.todoConatainer}>
            <TouchableOpacity
                style={styles.titleContainer}
                onPress={() => navigation.navigate('TaskView', { title, description })}
            >
                <Text style={styles.taskText}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.timeStamp}>{timeStamp.slice(0, 10)}</Text>

            <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => {
                    navigation.navigate('TaskForm', { title, description, todoId, view: 'update' });
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
    timeStamp: {
        alignSelf: 'center',
        fontSize: 10,
        color: 'grey',
        fontStyle: 'italic',
        marginRight: 7,
    },
    taskText: {
        textAlign: 'left',
    },
});
