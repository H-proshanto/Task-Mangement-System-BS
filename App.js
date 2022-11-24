import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/app/store';
import { AppLoader } from './src/components/AppLoader';
import { Tabs } from './src/components/Tabs';
import { TopNavbar } from './src/components/TopNavbar';
import { Landing } from './src/screens/Landing';
import { MemberForm } from './src/screens/MemberForm';
import { MemberView } from './src/screens/MemberView';
import { SignUp } from './src/screens/SignUp';
import { TaskForm } from './src/screens/TaskForm';
import { TaskView } from './src/screens/TaskView';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    const [initialRoute, setInitialRoute] = useState('Landing');

    return (
        <Provider store={store}>
            <PersistGate
                loading={<AppLoader setInitialRoute={setInitialRoute} />}
                persistor={persistor}
            >
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName={initialRoute}
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
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}
