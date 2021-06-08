import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, TextInput, Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodChoiceScreen from './MoodChoiceScreen';
import ActivityChoiceScreen from './ActivityChoiceScreen';
import ActivitySelectionScreen from './ActivitySelectionScreen';

const Stack = createStackNavigator();

export default function DiscussionScreen({ navigation }) {




    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}>
                <Stack.Screen
                    name="MoodChoice"
                    component={MoodChoiceScreen}

                />
                <Stack.Screen
                    name="ActivityChoice"
                    component={ActivityChoiceScreen}
                />
                <Stack.Screen
                    name="ActivitySelection"
                    component={ActivitySelectionScreen}
                />


            </Stack.Navigator>



        </NavigationContainer>


    )



}


const styles = StyleSheet.create({

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',



    },


    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,


    }

})