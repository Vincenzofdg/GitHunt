import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';

import SearchScreem from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';

import SearchIcon from './assets/search.png'
import ProfileIcon from './assets/profile.png'

// Crie o Tab Navigator
const Tab = createBottomTabNavigator();

const tabBarStyle = {
  headerShown: false,
  
  tabBarStyle: {
    backgroundColor: 'black',
  },
  tabBarActiveTintColor: 'purple',
  tabBarLabelStyle: {
    fontSize: 10
  }
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarStyle}>
        <Tab.Screen 
          name="Search" 
          component={SearchScreem}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color}) => (
              <Image source={SearchIcon} style={{ width: size, height: size, tintColor: color }} />
            )}
          }
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color}) => (
              <Image source={ProfileIcon} style={{ width: size, height: size, tintColor: color }} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
