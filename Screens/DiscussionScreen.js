import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, TextInput, Button, FlatList, Linking, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View, Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function DiscussionScreen({ navigation }) {




  return (
    <View style={styles.body}>
        <Text style={styles.text}>
            Discussion Screen
        </Text>

    </View>


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