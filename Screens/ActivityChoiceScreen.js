import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ActivityChoiceScreen = ({ navigation }) => {

    const [question, setQuestion] = useState('What do you want to do today?');
    const [choice1, setChoice1] = useState('Choice 1');
    const [choice2, setChoice2] = useState('Choice 2');
    const [choice3, setChoice3] = useState('Choice 3');
    const [selectedChoice, setSelectedChoice] = useState('world');



    const onPressHandler = () => {
        setSelectedChoice('hello');
        Navigate();
        
    }
    
    const Navigate = () => {
        console.log(selectedChoice);
        navigation.navigate('ActivitySelection', { choice: [selectedChoice]});

    }


    return (
        <View style={styles.body}>
            <View style={styles.question}>
                <Text style={styles.text} >
                    {question}
                </Text>
            </View>
            <View style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={onPressHandler}    
                >
                    {choice1}
                </Text>
            </View>
            <View
                style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={onPressHandler}>
                    {choice2}
                </Text>
            </View>
            <View
                style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={onPressHandler}>
                    {choice3}
                </Text>
            </View>

        </View>
    )
}

export default ActivityChoiceScreen


const styles = StyleSheet.create({

    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: '#A9C7BB',
        borderRadius: 10,

    },

    question: {
        backgroundColor: '#DBDBF5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 80,
        width: 300,
        marginLeft: 10,
    },

    choice: {
        backgroundColor: '#DBDBF5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 80,
        width: 300,
        margin: 10,
        marginLeft: 50,


    },

    text: {
        flex: 2,
        fontSize: 20,
        color: '#000',
        margin: 5,


    },

})