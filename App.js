import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Landing } from './src/screens/Landing';
import { SignUp } from './src/screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="landing">
                <Stack.Screen
                    name="landing"
                    component={Landing}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="registration"
                    component={SignUp}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
