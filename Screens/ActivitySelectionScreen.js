import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ActivitySelectionScreen = ({navigation, route}) => {


    const {choice} = route.params;
    const [question, setQuestion] = useState('Have fun in your activity!\nIt would be nice if you could come back and tell me how it went!');

    return (
        <View style={styles.body}>
            <View style={styles.answer}>
                <Text style={styles.text}>
                    {choice}
            </Text>
            </View>
            <View style={styles.question}>
                <Text style={styles.text}>
                    {question}
                </Text>
            </View>
        </View>
    )
}

export default ActivitySelectionScreen

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
        height: 120,
        width: 300,
        marginLeft: 10,
    },

    answer: {
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