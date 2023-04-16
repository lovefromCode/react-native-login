import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
