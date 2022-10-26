import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

export const ButtonUI = ({ title, onPress, bodyStyle, buttonStyle, textStyle }) => {
    const isLoading = false;

    return (
        <View style={bodyStyle}>
            <TouchableOpacity disabled={isLoading} onPress={onPress}>
                <View style={buttonStyle}>
                    {isLoading ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <Text style={textStyle}>{title}</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};
