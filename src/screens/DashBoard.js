import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const DashBoard = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>{/* <Text>Hello Task Mananger</Text> */}</ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
