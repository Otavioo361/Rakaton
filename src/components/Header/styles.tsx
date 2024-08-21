import { StyleSheet, StatusBar } from "react-native";

import colors from '../../theme/colors';

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.dark_purple,
      paddingTop: statusBarHeight,
      flexDirection: "row",
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 44,
    },
  
    content: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    username: {
      fontSize: 18,
      color: colors.white,
      fontWeight: "bold",
    },
  
    buttonUser: {
      width: 44,
      height: 44,
      backgroundColor: colors.opacity_white,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 44 / 2,
    },
  });
  
  export default styles;