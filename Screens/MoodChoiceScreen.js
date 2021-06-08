import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'



const MoodChoiceScreen = ({ navigation }) => {


    const [question, setQuestion] = useState('Hello, how are you feeling today?');

    const onPressHandler = () => {
        navigation.navigate('ActivityChoice')

    }


    return (
        <View style={styles.body}>

            <View style={styles.message}>


                <Text style={styles.text}>
                    {question}
                </Text>
            </View>

            <View style={styles.row}>
                <Pressable
                    onPress={onPressHandler}
                >
                    <Image style={styles.image}  source={require('../assets/smiley-very-happy.png')} />
                </Pressable>
                <Pressable
                    onPress={onPressHandler}
                >
                    <Image style={styles.image}  source={require('../assets/smiley-blushed.png')} />
                </Pressable>
                <Pressable
                    onPress={onPressHandler}
                >
                    <Image style={styles.image} source={require('../assets/smiley-sad.png')} />
                </Pressable>

                <Pressable
                    onPress={onPressHandler}
                >
                    <Image style={styles.image} source={require('../assets/smiley-deplored.png')} />
                </Pressable>

            </View>


        </View>
    )
}

export default MoodChoiceScreen

const styles = StyleSheet.create({

    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#A9C7BB',
        borderRadius: 10,

    },

    message: {
        flexDirection: 'row',
        backgroundColor: '#DBDBF5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 80,
        width: 300,
        marginLeft: 10,
    },

    row: {
        flexDirection: 'row'

    },

    image: {
        flexDirection: 'row',
        height: 50,
        width: 50,
        margin: 7,

    },


    text: {
        flex: 2,
        fontSize: 20,
        color: '#000',
        margin: 5,


    },


})
