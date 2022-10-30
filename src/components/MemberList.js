import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MemberItemView } from './MemberItemView';

export const MemberList = ({ navigation, data }) => {
    const renderItem = ({ item }) => (
        <MemberItemView
            memberId={item.id}
            memberName={item.name}
            memberTasks={item.taskCount}
            navigation={navigation}
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
