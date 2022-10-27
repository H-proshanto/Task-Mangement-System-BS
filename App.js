import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/app/store';
import { Tabs } from './src/components/Tabs';
import { TopNavbar } from './src/components/TopNavbar';
import { Landing } from './src/screens/Landing';
import { SignUp } from './src/screens/SignUp';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Landing">
                        <Stack.Screen
                            name="Landing"
                            component={Landing}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Registration"
                            component={SignUp}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="DashBoard"
                            component={Tabs}
                            options={({ navigation }) => ({
                                header: () => <TopNavbar navigation={navigation} />,
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
