import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { resetMembers } from '../features/member';
import { resetTasks } from '../features/task';
import { logout } from '../features/user';

export const TopNavbar = ({ navigation }) => {
    const username = useSelector((state) => state.user.info.name);
    const routesArray = navigation.getState().routes.map((route) => route.name);
    const shouldShowBackBtn = routesArray.some((route) => {
        if (
            route === 'TaskView' ||
            route === 'MemberView' ||
            route === 'TaskForm' ||
            route === 'MemberForm'
        ) {
            return true;
        }
        return false;
    });
    const dispatch = useDispatch();
    const clearAllData = () => {
        setTimeout(() => {
            dispatch(logout());
            dispatch(resetTasks());
            dispatch(resetMembers());
        }, 100);
    };

    return (
        <View style={styles.navContainer}>
            {shouldShowBackBtn && (
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image style={styles.backBtn} source={require('../assets/back.png')} />
                </TouchableOpacity>
            )}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Task Management</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.username}>{username}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Landing' }],
                        });
                        clearAllData();
                    }}
                >
                    <Image style={styles.logout} source={require('../assets/logout-icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        height: 80,
        backgroundColor: '#00879c',
        flexDirection: 'row',
    },
    username: {
        fontWeight: '300',
        fontSize: 20,
        alignSelf: 'center',
        color: 'white',
    },
    logout: {
        marginLeft: 7,
        marginRight: 3,
        marginTop: 5,
        alignSelf: 'center',
    },
    logo: {
        marginTop: 13,
        alignSelf: 'center',
        height: 60,
        width: 60,
    },
    logoContainer: {
        flexShrink: 1,
        width: '20%',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        width: '50%',
        justifyContent: 'center',
    },
    text: {
        marginTop: 13,
        fontSize: 17,
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: 'white',
    },
    profileContainer: {
        marginTop: 13,
        flex: 1,
        width: '40%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        tintColor: 'white',
        marginTop: 37,
        marginLeft: 3,
        alignSelf: 'center',
        height: 24,
        width: 24,
    },
});
