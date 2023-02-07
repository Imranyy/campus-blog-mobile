import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Blog from './screens/Blog';


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



