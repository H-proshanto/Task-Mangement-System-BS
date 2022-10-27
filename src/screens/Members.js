import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Members = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text>Hello Members</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
