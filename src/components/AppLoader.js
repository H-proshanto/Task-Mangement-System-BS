import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

export const AppLoader = ({ setInitialRoute }) => {
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        if (isLoggedIn) {
            setInitialRoute('DashBoard');
        }
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.loader} size={50} color="#e5dfdf" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
    },
    loader: {
        flex: 0.8,
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
