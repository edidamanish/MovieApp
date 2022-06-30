import React, { useState } from 'react';
import { View } from 'react-native';
import {
  HomeScreen,
  SettingsScreen,
  SearchScreen,
  LoginScreen,
} from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, SearchIcon, SettingsIcon } from './src/assets/images';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <>
      {!isUserLoggedIn ? (
        <LoginScreen />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              style: {
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                marginTop: -40,
              },
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: () => <HomeIcon />,
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: () => <SearchIcon />,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: () => <SettingsIcon />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
