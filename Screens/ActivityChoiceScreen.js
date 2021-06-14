import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { db, firebase } from "../firebase";

const ActivityChoiceScreen = ({ navigation }) => {
    const [question, setQuestion] = useState("What do you want to do today?");
    const [choice1, setChoice1] = useState("Choice 1");
    const [choice2, setChoice2] = useState("Choice 2");
    const [choice3, setChoice3] = useState("Choice 3");
    const [selectedChoice, setSelectedChoice] = useState("");
    const [idActivity, setIdActivity] = useState("");
    const [idUser, setIdUser] = useState("");

    useEffect(() => {
        if (choice1 == "Choice 1") {
            set_Random_activity();
        }
        if (idActivity != "" && idUser != "") {
            add_user_activity();

        }
        if (selectedChoice != "") {
            navigation.navigate("ActivitySelection", { choice: [selectedChoice] });
        }
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomInts(quantity, max) {
        const arr = [];
        while (arr.length < quantity) {
            var candidateInt = Math.floor(Math.random() * max) + 1;
            if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
        }
        return arr;
    }
    const set_Random_activity = () => {
        let tb = [];
        let tbNumber = [];
        db.collection("activity")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    tb.push(doc.data().sentence);
                });
                //const tbNumber = getThreeUniqNumber(1, 5);
                tbNumber = [0, 1, 5];
                tbNumber = getRandomInts(3, 5);
                setChoice1(tb[tbNumber[0]]);
                setChoice2(tb[tbNumber[1]]);
                setChoice3(tb[tbNumber[2]]);
            });
        //setChoice1("test");
    };

    // Add a new document with a generated id in the collection user_activity
    const add_user_activity = () => {
        db.collection("user_activity").add({
            id_user: idUser,
            id_activity: idActivity

        });
    }

    // Set activity Id and user Id
    function set_user_activity(choice) {
        db.collection("activity").where("sentence", "==", choice)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setIdActivity(doc.id);
                });
            });
        if (firebase.auth().currentUser !== null)
            setIdUser(firebase.auth().currentUser.uid);

    }


    return (
        <View style={styles.body}>
            <View style={styles.question}>
                <Text style={styles.text}>{question}</Text>
            </View>
            <View style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        setIdActivity("");
                        setSelectedChoice([choice1]);
                        set_user_activity(choice1);
                    }}

                >
                    {choice1}
                </Text>
            </View>
            <View style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        setIdActivity("");
                        setSelectedChoice([choice2]);
                        set_user_activity(choice2);
                    }}
                >
                    {choice2}
                </Text>
            </View>
            <View style={styles.choice}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        setIdActivity("");
                        setSelectedChoice([choice3]);
                        set_user_activity(choice3);
                    }}
                >
                    {choice3}
                </Text>
            </View>
        </View>
    );
};

export default ActivityChoiceScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#A9C7BB",
        borderRadius: 10,
    },

    question: {
        backgroundColor: "#DBDBF5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 80,
        width: 300,
        marginLeft: 10,
    },

    choice: {
        backgroundColor: "#DBDBF5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 80,
        width: 300,
        margin: 10,
        marginLeft: 50,
    },

    text: {
        flex: 2,
        fontSize: 20,
        color: "#000",
        margin: 5,
    },
});
