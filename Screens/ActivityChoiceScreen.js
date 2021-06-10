import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { db } from "../firebase";

const ActivityChoiceScreen = ({ navigation }) => {
  const [question, setQuestion] = useState("What do you want to do today?");
  const [choice1, setChoice1] = useState("Choice 1");
  const [choice2, setChoice2] = useState("Choice 2");
  const [choice3, setChoice3] = useState("Choice 3");
  const [selectedChoice, setSelectedChoice] = useState("");

  useEffect(() => {
    if (selectedChoice != "") {
      navigation.navigate("ActivitySelection", { choice: [selectedChoice] });
    }
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getThreeUniqNumber(max) {
    tb.push(Math.floor(Math.random() * (max - min + 1)) + min);
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
        setChoice1(tb[tbNumber[0]]);
        setChoice2(tb[tbNumber[1]]);
        setChoice3(tb[tbNumber[2]]);
      });
    //setChoice1("test");
  };

  return (
    <View style={styles.body}>
      <View style={styles.question}>
        <Button title="test" onPress={set_Random_activity} />
        <Text style={styles.text}>{question}</Text>
      </View>
      <View style={styles.choice}>
        <Text
          style={styles.text}
          onPress={() => {
            setSelectedChoice([choice1]);
          }}
        >
          {choice1}
        </Text>
      </View>
      <View style={styles.choice}>
        <Text
          style={styles.text}
          onPress={() => {
            setSelectedChoice([choice2]);
          }}
        >
          {choice2}
        </Text>
      </View>
      <View style={styles.choice}>
        <Text
          style={styles.text}
          onPress={() => {
            setSelectedChoice([choice3]);
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
