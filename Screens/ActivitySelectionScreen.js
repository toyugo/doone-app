import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./style_main";

const ActivitySelectionScreen = ({ navigation, route }) => {
  const { choice } = route.params;
  const [question, setQuestion] = useState(
    "Have fun in your activity!\nIt would be nice if you could come back and tell me how it went!"
  );

  return (
    <View style={styles.body}>
      <View style={styles.center}>
        <View style={styles.endchoice}>
          <Text style={styles.textmessage}>{choice}</Text>
        </View>
        <View style={styles.endmessage}>
          <Text style={styles.textmessage}>{question}</Text>
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

export default ActivitySelectionScreen;
