import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUI } from '../components/ButtonUI';
import { DropDown } from '../components/DropDown';
import { InputField } from '../components/InputField';
import { logout } from '../helpers/session';
import { validateTaskForm } from '../helpers/validation';
import { useTaskFormMutation } from '../react-query/APIHooks';

export const TaskForm = ({ navigation, route }) => {
    const [memberId, setMemberId] = useState();
    const [title, setTitle] = useState(route.params?.title);
    const [description, setDescription] = useState(route.params?.description);
    const dispatch = useDispatch();
    const view = route.params?.view;
    const taskId = route.params?.todoId;
    const token = useSelector((state) => state.user.token);
    const headerTitle = view === 'create' ? 'Add task' : 'Update task';
    const { mutate, status, error } = useTaskFormMutation(
        view,
        token,
        title,
        description,
        taskId,
        memberId,
    );

    const onFormSubmit = (values) => {
        setTitle(values.title);
        setDescription(values.description);
        setTimeout(mutate, 200);
    };

    useEffect(() => {
        setMemberId(route.params?.memberId);
    }, []);

    useEffect(() => {
        if (status === 'error') {
            if (error?.message.includes('401')) {
                Alert.alert('An issue occured', 'Session expired. Please Log In again');
                logout(dispatch, navigation);
            } else {
                Alert.alert('An issue occured', error?.message, [
                    {
                        text: 'Okay',
                    },
                ]);
            }
        }
        if (status === 'success') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DashBoard', params: { screen: 'Tasks' } }],
            });
        }
    });

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{headerTitle}</Text>
            </View>
            <Formik
                initialValues={{ title: title || '', description: description || '' }}
                onSubmit={(values) => onFormSubmit(values)}
                validate={validateTaskForm}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <InputField
                            text={values.title}
                            setter={handleChange('title')}
                            onBlur={handleBlur('title')}
                            placeholder="Title"
                        />
                        {errors.title && touched.title ? (
                            <Text style={styles.errorMessage}>{errors.title}</Text>
                        ) : (
                            <></>
                        )}
                        <InputField
                            text={values.description}
                            setter={handleChange('description')}
                            onBlur={handleBlur('description')}
                            placeholder="Description"
                        />
                        {errors.description && touched.description ? (
                            <Text style={styles.errorMessage}>{errors.description}</Text>
                        ) : (
                            <></>
                        )}
                        <DropDown memberId={memberId} setMemberId={setMemberId} />
                        <View style={styles.buttonContainer}>
                            <ButtonUI
                                title="Submit"
                                bodyStyle={styles.buttonBody}
                                buttonStyle={styles.button}
                                textStyle={styles.buttonText}
                                onPress={handleSubmit}
                                isLoading={status === 'loading' || status === 'success'}
                                loaderSize={30}
                                loaderStyle={styles.loaderStyle}
                            />
                        </View>
                    </View>
                )}
            </Formik>
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
        marginLeft: 15,
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
    formContainer: {
        marginTop: 7,
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        padding: 7,
        marginLeft: 21,
    },
    buttonContainer: {
        marginTop: 100,
        justifyContent: 'center',
    },
    buttonBody: {
        marginTop: 21,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#14b5a2',
        borderRadius: 14,
        width: 100,
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        padding: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loaderStyle: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
