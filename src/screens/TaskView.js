import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TaskView = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.title}>{route.params?.title}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Description</Text>
                <Text style={styles.description}>{route.params?.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 25,
        flex: 0.2,
        padding: 7,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    descriptionContainer: {
        padding: 7,
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
    },
    description: {
        marginTop: 15,
        marginLeft: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
});
