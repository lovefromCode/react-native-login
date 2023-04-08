
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


function Main({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <Text style={styles.text}>
          GEMEON
        </Text>
      </View>
      <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.img} source={require('./src/assets/images/game.png')} />
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