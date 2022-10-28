import { Formik } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUI } from '../components/ButtonUI';
import { InputField } from '../components/InputField';
import { addNewMember, updateMember } from '../features/member';

export const MemberForm = ({ navigation, route }) => {
    const view = route.params?.view;
    const memberName = route.params?.memberName;
    const memberId = route.params?.memberId;
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    const requestStatus = useSelector((state) => state.member.status);
    const headerTitle = view === 'create' ? 'Add member' : 'Update member';

    useEffect(() => {
        if (requestStatus === 'resolved') {
            navigation.reset({
                index: 0,
                routes: [{ name: 'DashBoard' }],
            });
        }
    });

    const validate = (values) => {
        const errors = {};

        if (!values.memberName) {
            errors.memberName = 'Name is required';
        }

        return errors;
    };

    const onPress = () => {
        if (view === 'create') {
            return addNewMember;
        } else {
            return updateMember;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{headerTitle}</Text>
            </View>
            <Formik
                initialValues={{ memberName: memberName || '' }}
                onSubmit={(values) =>
                    dispatch(
                        onPress()({
                            token,
                            memberName: values.memberName,
                            memberId,
                        }),
                    )
                }
                validate={validate}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <InputField
                            text={values.memberName}
                            setter={handleChange('memberName')}
                            onBlur={handleBlur('memberName')}
                            placeholder="Name"
                        />
                        {errors.memberName && touched.memberName ? (
                            <Text style={styles.errorMessage}>{errors.memberName}</Text>
                        ) : (
                            <></>
                        )}
                        <View style={styles.buttonContainer}>
                            <ButtonUI
                                title="Submit"
                                bodyStyle={styles.buttonBody}
                                buttonStyle={styles.button}
                                textStyle={styles.buttonText}
                                onPress={handleSubmit}
                                isLoading={requestStatus !== 'idle'}
                                loaderSize={20}
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
