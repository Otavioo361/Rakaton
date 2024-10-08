import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: "#c4c4cc",
  },

  button: {
    position: "absolute",
    backgroundColor: "#268032",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  }
});

export default styles;