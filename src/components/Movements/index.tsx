import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

import styles from "./styles";

export default function Movements({ item }) {
  const [showValue, setShowValue] = useState(false)

  const handleItemPressed = () => {
    setShowValue(!showValue);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={ () => handleItemPressed() }
    >
      <Text style={styles.date}>{item.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{item.label}</Text>

        <Text style={item.type === 1 ? styles.value : styles.expenses}>{item.type === 1 ? `R$ ${item.value}` : `R$ -${item.value}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
