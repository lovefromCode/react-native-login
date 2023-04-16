/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#AD40AF' },
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: '#fff',
            }}
        >
            <Tab.Screen name="Home2" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Love" component={FavoriteScreen} />
        </Tab.Navigator>
    )
}