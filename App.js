
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, TextInput, Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  
      return (
          <NavigationContainer >
              <Stack.Navigator
                  screenOptions={{
                      header: () => null
                  }}>
 {/*                  { user ? ( 
                  <Stack.Screen
                      name="Home"
                      component={HomeScreen}
  
                  >
                    {props => <HomeScreen {...props} extraData={user} />}
                  </Stack.Screen>
                    ) : (
                    <> */}

                  <Stack.Screen
                      name="Login"
                      component={LoginScreen}
                  />
                  <Stack.Screen
                      name="Registration"
                      component={RegistrationScreen}
                  />
                  <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                    />
{/*                     </>
                  )} */}
              </Stack.Navigator>
  
  
  
          </NavigationContainer>
  
  
      )
  
  
  
  }