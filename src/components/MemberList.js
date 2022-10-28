import React from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../features/task';
import { ItemView } from './ItemView';
import { MemberItemView } from './MemberItemView';

export const MemberList = ({ navigation }) => {
    const memberList = useSelector((state) => state.member.membersList);

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
            <FlatList data={memberList} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 0.9,
    },
});
