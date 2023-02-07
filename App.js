import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Blog from './screens/Blog';

 Font.loadAsync({
    'roboto-condensed-light':require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'roboto-condensed-regular':require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'roboto-condensed-bold':require('./assets/fonts/RobotoCondensed-Bold.ttf')
  })
  const Stack = createNativeStackNavigator();
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Blog" component={Blog}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}



