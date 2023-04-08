import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Banner({ data }) {
  console.log({ data });
  return (
    <View>
      <Image
        source={data.image}
        style={{ width: 300, height: 150, borderRadius: 10 }}
      />
    </View>
  )
}