import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

export const InputField = ({ text, setter, placeholder, onBlur }) => {
    const shouldBeEditable = useSelector(
        (state) =>
            state.user.status !== 'running' &&
            state.task.status !== 'running' &&
            state.member.status !== 'running',
    );

    return (
        <>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{placeholder}</Text>
                <TextInput
                    editable={shouldBeEditable}
                    style={styles.inputText}
                    placeholder={`Enter ${placeholder} Here`}
                    onChangeText={setter}
                    onBlur={onBlur}
                    value={text}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 0.2,
    },
    inputText: {
        marginTop: 14,
        marginLeft: 28,
        marginRight: 28,
        borderWidth: 2,
        padding: 7,
        color: 'black',
    },
    inputTitle: {
        marginTop: 28,
        marginLeft: 28,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
