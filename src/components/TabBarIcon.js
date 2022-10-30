import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const TabBarIcon = ({ focused, title }) => {
    const iconStyles = styles(focused);
    const path =
        title === 'Home'
            ? require('../assets/home.png')
            : title === 'Tasks'
            ? require('../assets/tasks.png')
            : require('../assets/users.png');
    return (
        <View style={iconStyles.iconContainer}>
            <Image style={iconStyles.icon} resizeMode="contain" source={path} />
            <Text style={iconStyles.text}>{title}</Text>
        </View>
    );
};

const styles = (focused) => {
    const tintColor = focused ? '#e32f45' : '#748c94';
    return StyleSheet.create({
        iconContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            top: 2,
        },

        icon: {
            width: 25,
            height: 25,
            tintColor,
        },
        text: {
            color: tintColor,
            fontSize: 12,
            textAlign: 'center',
        },
    });
};
