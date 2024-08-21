import React, { useCallback, useEffect, useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ScrollView, 
} from 'react-native';

import styles from "./styles";
import Movements from '../../components/Movements';
import Header from '../../components/Header';
import Balance from '../../components/Balance';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '235,89',
    date: '17/01/2024',
    type: 0, // despesas
  },
  {
    id: 2,
    label: 'Boleto conta água',
    value: '137,55',
    date: '20/01/2024',
    type: 0, // despesas
  },
  {
    id: 3,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '22/01/2024',
    type: 1, // receita / entrada
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name="Flávio Freitas" />

        <Balance entradas="0,00" saldo="15.500,00" gastos="7.500,00" />

        {/* <Actions /> */}
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements item={ item } />}
        />
      </ScrollView>
    </View>
  );
}
