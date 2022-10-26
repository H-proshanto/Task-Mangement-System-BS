import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { InputField } from './InputField';

export const LoginForm = () => {
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log('hello')}
            validate={validate}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <ScrollView style={styles.container}>
                    <InputField
                        text={values.email}
                        setter={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder="Email"
                    />
                    {errors.email ? <Text style={styles.errorMessage}>{errors.email}</Text> : <></>}
                    <InputField
                        text={values.password}
                        setter={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder="Password"
                    />
                    {errors.password ? (
                        <Text style={styles.errorMessage}>{errors.password}</Text>
                    ) : (
                        <></>
                    )}
                </ScrollView>
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
});
