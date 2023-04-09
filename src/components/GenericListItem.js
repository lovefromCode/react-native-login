
//**** generic compoanent to render all kind of lists */
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function GenericListItem({ item, onPress }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image
                    source={item.poster}
                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
                />
                <View style={{ width: 100 }}>
                    <Text
                        style={{
                            color: '#333',
                            fontSize: 14,
                        }}>
                        {item.subtitle}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        {item.title}
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={onPress} style={{
                backgroundColor: '#0aada8',
                padding: 10,
                width: 100,
                borderRadius: 10,
            }}>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                }}>
                    {item.isFree == 'Yes' && 'Play'}
                    {item.isFree == 'No' && item.price}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})