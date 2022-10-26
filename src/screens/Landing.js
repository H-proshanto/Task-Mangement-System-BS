import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ButtonUI } from '../components/ButtonUI';
import { LoginForm } from '../components/LoginForm';

export const Landing = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerlogo} source={require('../assets/logo.png')} />
                <Text style={styles.headertext}> Task Management </Text>
            </View>
            <LoginForm />
            <View style={styles.buttonContainer}>
                <ButtonUI
                    title="Sign Up"
                    bodyStyle={styles.registrationContainer}
                    buttonStyle={styles.registrationBtn}
                    textStyle={styles.registrationText}
                    onPress={() => navigation.navigate('Registration')}
                />
            </View>
        </ScrollView>
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
    buttonContainer: {
        marginTop: 49,
        height: hp('13%'),
        marginLeft: 130,
        backgroundColor: '#D261D8',
        borderTopLeftRadius: wp('30%'),
        border: 'none',
        overflow: 'hidden',
    },
    registrationContainer: {
        alignItems: 'flex-end',
        marginTop: 28,
    },
    registrationBtn: {
        backgroundColor: '#FFF',
        width: wp('30%'),
        borderBottomLeftRadius: wp('50%'),
        borderTopLeftRadius: wp('50%'),
    },
    registrationText: {
        color: 'purple',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
    },
});
