import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomSwitch({
    gameTab,
    setGameTab,
    option1,
    option2,
    // handleSelectSwitch,
}) {
    // const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    // const updateSwitchData = value => {
    //     setSelectionMode(value);
    //     onSelectSwitch(value);
    // };

    console.log(gameTab);
    return (
        <View
            style={{
                margin: 20,
                height: 40,
                // width: '100%',
                backgroundColor: '#e4e4e4',
                borderRadius: 10,
                borderColor: '#AD40AF',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
                // activeOpacity={1}
                onPress={() => setGameTab(1)}
                style={{
                    flex: 1,
                    backgroundColor: gameTab == 1 ? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: gameTab == 1 ? 'white' : '#AD40AF',
                        fontSize: 14,
                    }}>
                    Free to play
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                // activeOpacity={1}
                onPress={() => setGameTab(2)}
                style={{
                    flex: 1,
                    backgroundColor: gameTab == 2 ? '#AD40AF' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: gameTab == 2 ? 'white' : '#AD40AF',
                        fontSize: 14,
                    }}>
                    Paid games
                </Text>
            </TouchableOpacity>
        </View>
    );
}
