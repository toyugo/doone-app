import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style_main";

const ActivitySelectionScreen = ({ navigation, route }) => {
  const { choice } = route.params;
  const [question, setQuestion] = useState(
    "Have fun in your activity!\nIt would be nice if you could come back and tell me how it went!"
  );

  return (
    <View style={styles.body}>
      <View style={styles.answer}>
        <Text style={styles.text}>{choice}</Text>
      </View>
      <View style={styles.question}>
        <Text style={styles.text}>{question}</Text>
      </View>
    </View>
  );
};

export default ActivitySelectionScreen;
