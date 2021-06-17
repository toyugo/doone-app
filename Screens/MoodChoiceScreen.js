import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import styles from "./style_main";
import { db, firebase } from "../firebase";

const MoodChoiceScreen = ({ navigation }) => {
  const [question, setQuestion] = useState("Hello, how are you feeling today?");
  const [idUser, setIdUser] = useState("");
  const [mood, setMood] = useState("");
  const date = "";

  useEffect(() => {
    if (idUser != "") {
      add_user_mood();
    }
  });

  // Add a new document with a generated id in the collection user_mood
  const add_user_mood = () => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    db.collection("user_mood").add({
      id_user: idUser,
      name_mood: mood,
      date: date + "-" + month + "-" + year,
    });
    navigation.navigate("ActivityChoice");
  };

  // Set activity Id and user Id
  function set_user_mood() {
    if (firebase.auth().currentUser !== null)
      setIdUser(firebase.auth().currentUser.uid);
  }
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.message}>
          <View>
            <Text style={styles.textmessage}>{question}</Text>
          </View>
        </View>
        <View style={styles.reponse}>
          <View style={styles.row}>
            <Pressable
              onPress={() => {
                setMood("very happy");
                set_user_mood();
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/smiley-very-happy.png")}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setMood("happy");
                set_user_mood();
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/smiley-blushed.png")}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setMood("sad");
                set_user_mood();
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/smiley-sad.png")}
              />
            </Pressable>

            <Pressable
              onPress={() => {
                setMood("deplored");
                set_user_mood();
              }}
            >
              <Image
                style={styles.image}
                source={require("../assets/smiley-deplored.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.positionRoux}>
        <Image
          style={styles.iconRoux}
          source={require("../assets/roux_small.png")}
        />
      </View>
    </View>
  );
};
//<Image style={styles.iconRoux} source={require("../assets/roux.png")} />
/* <Image
                style={[{ justifyContent: "space-around" }]}
                source={require("../assets/roux.png")}
            />*/
export default MoodChoiceScreen;
