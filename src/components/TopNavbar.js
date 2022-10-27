import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TopNavbar = ({ navigation }) => {
    return (
        <View style={styles.navContainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Task Management</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.username}>{'Mr.pro'}</Text>
                <TouchableOpacity onPress={() => console.log('hello logout koren')}>
                    <Image style={styles.logout} source={require('../assets/logout-icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        height: 80,
        backgroundColor: '#00879c',
        flexDirection: 'row',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: 'white',
    },
    logout: {
        marginLeft: 7,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'center',
    },
    logo: {
        marginTop: 13,
        alignSelf: 'center',
        height: 60,
        width: 60,
    },
    logoContainer: {
        flexShrink: 1,
        width: '20%',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        width: '50%',
        justifyContent: 'center',
    },
    text: {
        marginTop: 13,
        fontSize: 17,
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: 'white',
    },
    profileContainer: {
        marginTop: 13,
        flex: 1,
        width: '40%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
