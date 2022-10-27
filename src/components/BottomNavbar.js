import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomNavbar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashBoard" component={DashBoard} />
        </Tab.Navigator>
    );
};
