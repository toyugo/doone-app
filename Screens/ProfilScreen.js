import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { db, firebase } from "../firebase";
import styleProfile from "./style_profile";
const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("email");
  const [idUser, setIdUser] = useState("id");
  useEffect(() => {
    if (fullName == "") {
      //setFullName("NewName");
      console.log("useEffect1");
      get_fullName();
    }
  });

  const get_fullName = () => {
    console.log("start fullName");
    const tb = [];
    if (firebase.auth().currentUser !== null)
      setIdUser(firebase.auth().currentUser.uid);
    else return;
    db.collection("users")
      .where("id", "==", idUser)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tb.push(doc.data().fullName);
          tb.push(doc.data().email);
          setFullName(tb[0]);
          setEmail(tb[1]);
        });
      });
  };
  return (
    <View style={styleProfile.container}>
      <View style={styleProfile.top}>
        <Text style={styleProfile.baseText}>{fullName}</Text>
        <Text style={styleProfile.baseText}>{email}</Text>
      </View>
      <View style={styleProfile.down}>
        <TouchableOpacity style={styleProfile.button}>
          <Text style={styleProfile.buttonTitle}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileScreen;
