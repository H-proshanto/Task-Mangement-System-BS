import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/app/store';
import { Tabs } from './src/components/Tabs';
import { TopNavbar } from './src/components/TopNavbar';
import { Landing } from './src/screens/Landing';
import { MemberForm } from './src/screens/MemberForm';
import { MemberView } from './src/screens/MemberView';
import { SignUp } from './src/screens/SignUp';
import { TaskForm } from './src/screens/TaskForm';
import { TaskView } from './src/screens/TaskView';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Landing"
                        screenOptions={({ navigation }) => ({
                            header: () => <TopNavbar navigation={navigation} />,
                        })}
                    >
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
                        <Stack.Screen name="TaskForm" component={TaskForm} />
                        <Stack.Screen name="TaskView" component={TaskView} />
                        <Stack.Screen name="MemberView" component={MemberView} />
                        <Stack.Screen name="MemberForm" component={MemberForm} />
                        <Stack.Screen name="DashBoard" component={Tabs} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
