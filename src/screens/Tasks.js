import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Tasks = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>All Tasks</Text>
                <Text style={styles.headerDescription}>You will find all your tasks here.</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTitle}>Here are all tasks:</Text>
                <View style={styles.createButtonContainer}>
                    <TouchableOpacity
                        style={styles.createButton}
                        onPress={() => {
                            navigation.navigate('TaskForm', { view: 'create' });
                        }}
                    >
                        <Text style={styles.createButtonText}>Add new</Text>
                    </TouchableOpacity>
                </View>
                {/* <TaskList /> */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.3,
        padding: 7,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    headerDescription: {
        marginTop: 10,
        fontWeight: '300',
        fontSize: 21,
        fontStyle: 'italic',
    },
    bodyContainer: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 15,
    },
    bodyTitle: {
        fontWeight: 'bold',
        fontSize: 21,
        padding: 7,
    },
    createButtonContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    createButton: {
        width: 100,
    },
    createButtonText: {
        color: 'black',
        fontSize: 21,
        textAlign: 'right',
        textDecorationLine: 'underline',
        marginRight: 7,
    },
});
