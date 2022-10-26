import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoginForm } from '../components/LoginForm';

export const Landing = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerlogo} source={require('../assets/logo.png')} />
                <Text style={styles.headertext}> Task Management </Text>
            </View>
            <LoginForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: hp('43%'),
        backgroundColor: '#D261D8',
        borderBottomRightRadius: hp('32%'),
        border: 'none',
        overflow: 'hidden',
    },
    headerlogo: {
        marginTop: StatusBar.currentHeight,
        height: 120,
        width: 120,
        alignSelf: 'center',
    },
    headertext: {
        marginTop: 28,
        alignSelf: 'center',
        fontFamily: 'monospace',
        fontSize: 24,
        fontWeight: '300',
        color: 'white',
    },
});
