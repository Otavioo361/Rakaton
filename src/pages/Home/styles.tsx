import { StyleSheet } from "react-native";

import colors from '../../theme/colors';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.opacity_white,
    },
  
    header: {
  
    },
  
    scrollArea: {
      marginTop: 80,
    },
  
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
    },
  
    list: {
      marginStart: 14,
      marginEnd: 14,
    },
  });

  export default styles;