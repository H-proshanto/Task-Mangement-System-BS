import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoView } from './TodoView';

export const TaskList = ({ navigation }) => {
    const { taskList } = useSelector((state) => state.task);
    console.log(taskList);

    const renderItem = ({ item }) => <TodoView todo={item} navigation={navigation} />;

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
