import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registration, resetUserStatus } from '../features/user';
import { ButtonUI } from './ButtonUI';
import { InputField } from './InputField';

export const RegistrationForm = ({ navigation }) => {
    const requestStatus = useSelector((state) => state.user.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (requestStatus === 'resolved') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DashBoard' }],
            });
            setTimeout(() => dispatch(resetUserStatus()), 550);
        }
    });

    const validate = (values) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errors = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (values.name.length > 10) {
            errors.name = 'Username can not be more than 10 letters';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!values.email.match(mailformat)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        if (values.password !== values.password2) {
            errors.password2 = 'Password must match';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '', password2: '' }}
            onSubmit={(values) => dispatch(registration(values))}
            validate={validate}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <InputField
                        text={values.name}
                        setter={handleChange('name')}
                        onBlur={handleBlur('name')}
                        placeholder="Name"
                    />
                    {errors.name && touched.name ? (
                        <Text style={styles.errorMessage}>{errors.name}</Text>
                    ) : (
                        <></>
                    )}
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
                    />
                    {errors.password && touched.password ? (
                        <Text style={styles.errorMessage}>{errors.password}</Text>
                    ) : (
                        <></>
                    )}
                    <InputField
                        text={values.password2}
                        setter={handleChange('password2')}
                        onBlur={handleBlur('password2')}
                        placeholder="Retype Password"
                    />
                    {errors.password2 && touched.password2 ? (
                        <Text style={styles.errorMessage}>{errors.password2}</Text>
                    ) : (
                        <></>
                    )}
                    <ButtonUI
                        title="Sign Up"
                        bodyStyle={styles.signUpContainer}
                        buttonStyle={styles.signUpButton}
                        textStyle={styles.signUpText}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        padding: 7,
        marginLeft: 21,
    },
    signUpContainer: {
        alignItems: 'center',
        marginTop: 21,
    },
    signUpButton: {
        backgroundColor: '#2c7af5',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
    },
    signUpText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
});
