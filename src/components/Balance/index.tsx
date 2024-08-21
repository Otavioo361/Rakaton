import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

import styles from "./styles";

import { MotiView } from 'moti';

export default function Balance({ entradas, saldo, gastos }) {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 800,
        delay: 300,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Entradas</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.received}>{entradas}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>     
    </MotiView>
  );
}
