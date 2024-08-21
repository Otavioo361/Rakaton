import { StyleSheet } from "react-native";

import colors from '../../theme/colors'


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: colors.opacity_black,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
    },
  
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    item: {
      borderWidth: 1,
      padding: 12,
      borderRadius: 8,
      borderColor: colors.opacity_black,
    },
  
    itemTitle: {
      fontSize: 20,
      color: colors.gray_400,
    },
  
    currencySymbol: {
      color: colors.gray_400,
      marginRight: 6,
    },
  
    received: {
      fontSize: 22,
      color: "blue",
    },
  
    balance: {
      fontSize: 22,
      color: colors.green,
    },
  
    expenses: {
      fontSize: 22,
      color: colors.red,
    },
  });

  export default styles;