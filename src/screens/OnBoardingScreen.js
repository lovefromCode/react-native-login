/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function OnBoardingScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View>
                <Text style={styles.text}>
                    GEMEON
                </Text>
            </View>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Image style={styles.img} source={require('./src/assets/images/game.png')} /> */}
            </View>
            <TouchableOpacity
                style={styles.containerButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.text2}>Let's Begin</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#20315f',
    },
    containerButton: {
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 5,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
    img: {
        width: 260,
        height: 260,
    },
});