import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";
import { db, firebase } from "../firebase";
import { createStackNavigator } from "@react-navigation/stack";

export default function ResultsScreen({ navigation }) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_A')
  };
  const [counterType, setCounterType] = useState([]);
  const [listIdActivities, setListIdActivities] = useState([]);
  const [idUser, setIdUser] = useState("");

  function get_activities_id() {
    const tb = [];
    if (firebase.auth().currentUser !== null)
      setIdUser(firebase.auth().currentUser.uid);
    else return;
    db.collection("user_activity")
      .where("id_user", "==", idUser)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tb.push(doc.data().id_activity);
        });
      });
    setListIdActivities(tb);
  }

  const set_CountPersonal = () => {
    get_activities_id();
    let tbNumber = [];
    let tb = [];
    const counter = { social: 0, cultural: 0, personal: 0 };
    db.collection("activity")
      .get()
      .then(function (querySnapshot) {
        console.log(tb);
        querySnapshot.forEach(function (doc) {
          for (let i = 0; i < listIdActivities.length; i++) {
            if (doc.id == listIdActivities[i]) {
              counter[doc.data().type] = counter[doc.data().type] + 1;
            }
          }
        });
        console.log("counter value =>", counter);
        setCounterType(counter);
      });
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Results Screen</Text>
      <Text style={styles.text}>{counterType["social"]}</Text>
      <Text style={styles.text}>{counterType["cultural"]}</Text>
      <Text style={styles.text}>{counterType["personal"]}</Text>
      <Button title="test" onPress={set_CountPersonal}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
