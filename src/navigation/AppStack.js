/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingScreen from '../screens/SettingScreen';
import MomentsScreen from '../screens/MomentsScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer  {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#aa16ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Moments" component={MomentsScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator>
    )
}