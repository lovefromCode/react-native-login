/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground source={require('../assets/images/menuBG.jpeg')} style={{ padding: 20 }}>
                    <Image source={require('../assets/images/user-profile.jpg')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <Text style={{ fontSize: 16, color: '#fff' }}>Prashant Maitra</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingBottom: 10 }}>
                    <Text>Tell a Friend</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
