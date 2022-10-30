import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { DashBoard } from '../screens/DashBoard';

const Tab = createBottomTabNavigator();

export const BottomNavbar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashBoard" component={DashBoard} />
        </Tab.Navigator>
    );
};
