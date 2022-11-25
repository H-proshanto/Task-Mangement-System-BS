import React, { useEffect } from 'react';
import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { RegistrationForm } from '../components/RegistrationForm';
import { resetUserStatus } from '../model/user';

export const SignUp = ({ navigation }) => {
    const requestStatus = useSelector((state) => state.user.status);
    const errorMessage = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (requestStatus === 'error') {
            if (errorMessage.includes('403')) {
                Alert.alert('User already Exists.');
            } else {
                Alert.alert('An issue occured', errorMessage, [
                    {
                        text: 'Okay',
                    },
                ]);
                dispatch(resetUserStatus());
            }
        }
    }, [requestStatus]);

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
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
