import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetUserStatus } from '../slices/user';
import { validateLoginForm } from '../helpers/validation';
import { ButtonUI } from './ButtonUI';
import { InputField } from './InputField';

export const LoginForm = ({ navigation }) => {
    const dispatch = useDispatch();
    const requestStatus = useSelector((state) => state.user.status);

    useEffect(() => {
        if (requestStatus === 'resolved') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DashBoard' }],
            });
            setTimeout(() => dispatch(resetUserStatus()), 550);
        }
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => dispatch(login(values))}
            validate={validateLoginForm}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <InputField
                        text={values.email}
                        setter={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                        <Text style={styles.errorMessage}>{errors.email}</Text>
                    ) : (
                        <></>
                    )}
                    <InputField
                        text={values.password}
                        setter={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder="Password"
                        editable={requestStatus === 'running' ? false : true}
                    />
                    {errors.password && touched.password ? (
                        <Text style={styles.errorMessage}>{errors.password}</Text>
                    ) : (
                        <></>
                    )}
                    <ButtonUI
                        title="Log In"
                        bodyStyle={styles.loginContainer}
                        buttonStyle={styles.loginButton}
                        textStyle={styles.loginText}
                        onPress={handleSubmit}
                        isLoading={requestStatus !== 'idle'}
                        loaderStyle={styles.loaderStyle}
                        loaderSize={20}
                    />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        padding: 7,
        marginLeft: 21,
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: 21,
    },
    loginButton: {
        backgroundColor: '#A261C5',
        paddingLeft: 110,
        paddingRight: 110,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    loaderStyle: {
        paddingTop: 6,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
    },
});
