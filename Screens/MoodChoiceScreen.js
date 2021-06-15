import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import styles from "./style_main";

const MoodChoiceScreen = ({ navigation }) => {
  const [question, setQuestion] = useState("Hello, how are you feeling today?");

  const onPressHandler = () => {
    navigation.navigate("ActivityChoice");
  };

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
            <Pressable onPress={onPressHandler}>
              <Image
                style={styles.image}
                source={require("../assets/smiley-very-happy.png")}
              />
            </Pressable>
            <Pressable onPress={onPressHandler}>
              <Image
                style={styles.image}
                source={require("../assets/smiley-blushed.png")}
              />
            </Pressable>
            <Pressable onPress={onPressHandler}>
              <Image
                style={styles.image}
                source={require("../assets/smiley-sad.png")}
              />
            </Pressable>

            <Pressable onPress={onPressHandler}>
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
