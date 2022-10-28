import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ItemView } from './ItemView';

export const TaskList = ({ navigation, data }) => {
    const renderItem = ({ item }) => (
        <ItemView
            todoId={item.id}
            title={item.title}
            description={item.description}
            timeStamp={item.createdAt}
            navigation={navigation}
            memberName={item.Member?.name}
            memberId={item.Member?.id}
        />
    );

    return (
        <View style={styles.listContainer}>
            <FlatList data={data} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 0.9,
    },
});
