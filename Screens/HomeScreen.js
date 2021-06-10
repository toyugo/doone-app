import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DiscussionScreen from './DiscussionScreen';
import ResultsScreen from './ResultsScreen';
import ProfilScreen from './ProfilScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <NavigationContainer independent={true}>
        <Tab.Navigator
  
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Discussion') {
                iconName = 'comments';
                size = focused ? 30 : 25;
  
  
              } else if (route.name === 'Results') {
                iconName = 'chart-line';
                size = focused ? 30 : 25;
  
              } else if (route.name === 'Profil') {
                iconName = 'id-badge';
                size = focused ? 30 : 25;
  
              }
              return (
                <FontAwesome5
                  name={iconName}
                  size={size}
                />
  
              )
  
            }
  
          })
  
          }
  
  
          activeColor='#f0edf6'
          inactiveColor='#3e2465'
          barStyle={{ backgroundColor: '#694fad' }}
  
        >
          <Tab.Screen
            name="Discussion"
            component={DiscussionScreen}
  
          />
          <Tab.Screen
            name="Results"
            component={ResultsScreen}
          />
  
          <Tab.Screen
            name="Profil"
            component={ProfilScreen}
          />
  
  
        </Tab.Navigator>
  
      </NavigationContainer>
  
  
    )

}

export default HomeScreen
