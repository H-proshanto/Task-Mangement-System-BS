import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const DashBoard = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Welcome to Task Management System</Text>
                <Text style={styles.headerDescription}>
                    This is an simple application for assigning tasks to members of the industry.
                    Each members can be assigned different tasks.Users can create new tasks or add
                    members. If wished tasks and members can also be deleted or edited accordingly.
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTitle}>Get Started</Text>
                <TouchableOpacity
                    style={styles.bodyButton}
                    onPress={() => navigation.navigate('Tasks')}
                >
                    <Text style={styles.bodyBtnText}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bodyButton}
                    onPress={() => navigation.navigate('Members')}
                >
                    <Text style={styles.bodyBtnText}>Members</Text>
                </TouchableOpacity>
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
        fontSize: 21,
    },
    headerDescription: {
        marginTop: 10,
        fontWeight: '300',
        fontSize: 20,
        fontStyle: 'italic',
    },
    bodyContainer: {
        flex: 0.3,
        flexDirection: 'column',
        marginTop: 15,
    },
    bodyTitle: {
        fontWeight: 'bold',
        fontSize: 21,
        padding: 7,
    },
    bodyButton: {
        alignItems: 'center',
        backgroundColor: '#4de0e8',
        padding: 20,
        marginTop: 70,
        marginLeft: 65,
        marginRight: 65,
        borderRadius: 13,
    },
    bodyBtnText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});
