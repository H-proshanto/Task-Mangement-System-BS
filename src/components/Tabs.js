import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks, resetTaskStatus } from '../features/task';
import { DashBoard } from '../screens/DashBoard';
import { Members } from '../screens/Members';
import { Tasks } from '../screens/Tasks';
import { TabBarIcon } from './TabBarIcon';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashBoard}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'Home'} />,
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'Tasks'} />,
                }}
            />
            <Tab.Screen
                name="Members"
                component={Members}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={'Members'} />,
                }}
            />
        </Tab.Navigator>
    );
};
