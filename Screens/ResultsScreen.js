import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import {
  Button,
  View,
  Text,
  ScrollView,
} from "react-native";
import styles from "./style_main";
import {
  PieChart,
  BarChart,
} from 'react-native-chart-kit'
import { db, firebase } from "../firebase";




export default function ResultsScreen({ navigation }) {

  const [counterType, setCounterType] = useState([]);
  const [listIdActivities, setListIdActivities] = useState([]);
  const [listDateMood, setListDateMood] = useState([]);
  const [listNameMood, setListNameMood] = useState([]);
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
    const date = [];
    const mood = [];
    db.collection("user_mood")
    .where("id_user", "==", idUser)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        date.push(doc.data().date);
        mood.push(doc.data().name_mood);
      });
    });
    // get the last 7 elemnt of the array

  //lastSeven.slice(Math.max(date.length - 7, 0));
  setListDateMood(date);
  setListNameMood(mood);
  console.log(listDateMood);
  console.log(listNameMood);
  const newData = [];
  for (let i= 0; i < 7; i++){
    const last = listDateMood.pop();
    newData.push(last);
  }
  console.log(newData);
  }

  const set_CountPersonal = () => {
    get_activities_id();
    let tbNumber = [];
    let tb = [];
    const counter = { personal: 0, social: 0, manual: 0, cultural: 0, sport: 0 };
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
        setCounterType(counter);
        const newData = [...pieData];
        newData[0].population = counter.personal;
        newData[1].population = counter.social;
        newData[2].population = counter.manual;
        newData[3].population = counter.cultural;
        newData[4].population = counter.sport;
        setPieData(newData);
      });
  };




  const screenWidth = Dimensions.get("window").width;

  const chartConfigPie = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  
  const chartConfigBar = {
    backgroundGradientFrom: "#EEB398",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(108, 55, 0, ${opacity})`,
    useShadowColorFromDataset: false // optional
  };


  const [pieData, setPieData] = useState([
    {
      name: 'Personal',
      population: 0,
      color: '#6B3B24',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Social',
      population: 0,
      color: '#EEB398',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Manual',
      population: 0,
      color: '#EB8250',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Cultural',
      population: 0,
      color: '#663E6B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Sport',
      population: 0,
      color: '#D742EB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]);

  const [barData, setBarData]  = useState({
    labels: ['01-01', '02-01', '03-01', '04-01', '05-01', '06-01','07-01'],
    datasets: [
      {
        data: [100, 70, 0, 25, 70, 0, 25],
      },
    ],
  });

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.message}>
        <View>
          <Text style={styles.textmessage}>
            Types of activities performed :
          </Text>
        </View>
      </View>
      <PieChart
        data={pieData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfigPie}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.reponse}>
        <Text style={styles.textmessage}
          onPress={() => { set_CountPersonal(); }}>
          Click 3 Times to Actualize
        </Text>
      </View>
      <View style={styles.message}>
        <View>
          <Text style={styles.textmessage}>
            Mood according to the day :
          </Text>
        </View>
      </View>
      <BarChart
        //style={graphStyle}
        data={barData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfigBar}
      />

    </ScrollView>

  )

};
