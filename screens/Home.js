import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "./About"; 
import Blogs from './Blogs';

const Tab = createBottomTabNavigator();
function Home({navigation}) {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Blogs') {
                iconName = focused
                  ? 'home'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'ios-list-outline' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Blogs" component={Blogs} options={{ tabBarBadge: 1 }} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
}


export default Home;