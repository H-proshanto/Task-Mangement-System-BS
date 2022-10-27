import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ItemView } from './ItemView';

export const TaskList = ({ navigation }) => {
    const taskList = useSelector((state) => state.task.taskList.tasks);

    const renderItem = ({ item }) => (
        <ItemView
            todoId={item.id}
            title={item.title}
            description={item.description}
            timeStamp={item.createdAt}
            navigation={navigation}
        />
    );

    return (
        <View style={styles.listContainer}>
            <FlatList data={taskList} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 0.9,
    },
});
