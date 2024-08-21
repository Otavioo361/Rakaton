import { StyleSheet } from "react-native";

import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.gray_200,
    },
  
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8,
    },
  
    date: {
      color: colors.gray_200,
      fontWeight: 'bold',
    },
  
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    value: {
      fontSize: 16,
      color: colors.green,
      fontWeight: 'bold',
    },
  
    expenses: {
      fontSize: 16,
      color: colors.red,
      fontWeight: 'bold',
    }
  });

  export default styles;