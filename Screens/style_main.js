import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FDECDC",
    borderRadius: 10,
    textAlign: "center",
  },

  scrollview: {
    flex: 1,
    backgroundColor: "#FDECDC",

  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#AB7CF4",
    borderRadius: 10,
    height: 100,
  },
  endmessage: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingLeft: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#AB7CF4",
    borderRadius: 10,
    height: 100,
  },
  endchoice: {
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#E6A170",
    borderRadius: 10,
    height: 100,
  },
  textmessage: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "notoserif",
  },

  reponse: {
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: "#E6A170",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },

  image: {
    height: 50,
    width: 50,
  },

  positionRoux: {
    borderRadius: 50,
    height: 80,
    width: 80,
    //backgroundColor: "#F3E8FC",
    backgroundColor: "#FFEEED",
    alignSelf: "flex-end",
    margin: 0,
    paddingTop: 10,
    //shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  iconRoux: {
    height: 70,
    width: 70,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  text: {
    fontSize: 20,
    color: "#000",
    margin: 5,
  },
});

export default styles;
