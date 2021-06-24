import { StyleSheet } from "react-native";

const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    //    alignItems: "center",
    //   backgroundColor: "#FDECDC",
    //    justifyContent: "center",
  },
  top: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    backgroundColor: "#FDECDC",
    justifyContent: "center",
  },
  down: {
    flex: 1,
    backgroundColor: "#FDECDC",
  },
  baseText: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
  },
  icon: {
    color: "#FFB680",
  },
  button: {
    backgroundColor: "#FFB680",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default stylesProfile;
