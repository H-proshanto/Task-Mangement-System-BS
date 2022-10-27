import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RegistrationForm } from '../components/RegistrationForm';

export const SignUp = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerlogo} source={require('../assets/logo.png')} />
                <Text style={styles.headertext}> Registration </Text>
            </View>
            <RegistrationForm navigation={navigation} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: hp('30%'),
        backgroundColor: '#5a94f2',
        borderBottomLeftRadius: hp('23%'),
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
        marginTop: 7,
        alignSelf: 'center',
        fontFamily: 'monospace',
        fontSize: 24,
        fontWeight: '300',
        color: 'white',
    },
});
