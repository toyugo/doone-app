import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DiscussionScreen from './Screens/DiscussionScreen';
import ResultsScreen from './Screens/ResultsScreen';
import ProfilScreen from './Screens/ProfilScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {


  

  return (
    <NavigationContainer>
      <Tab.Navigator
       /*  screenOptions={{
          header: () => null
        }} */
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
