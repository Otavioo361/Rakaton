// src/pages/Home/index.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import styles from "./styles";
import Movements from '../../components/Movements';
import Header from '../../components/Header';
import { supabase } from '../../services/supabase';

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  const [entries, setEntries] = useState<number>(0); // Total de entradas
  const [exits, setExits] = useState<number>(0); // Total de saídas
  const [movements, setMovements] = useState<any[]>([]); // Movimentações
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = await AsyncStorage.getItem('user_email');
        if (email) {
          const { data, error } = await supabase
            .from('users')
            .select('name')
            .eq('email', email)
            .single();

          if (error || !data) {
            Alert.alert('Erro', 'Não foi possível carregar os dados do usuário');
          } else {
            setName(data.name);
          }
        }
      } catch (error) {
        Alert.alert('Erro', 'Erro ao buscar dados do usuário');
      }
    };

    const fetchMovements = async () => {
      try {
        const email = await AsyncStorage.getItem('user_email');
        if (email) {
          const { data, error } = await supabase
            .from('movements')
            .select('*')
            .eq('user_email', email);

          if (error) {
            Alert.alert('Erro', 'Não foi possível carregar as movimentações');
          } else {
            setMovements(data);
            const entriesSum = data
              .filter(movement => movement.type === 1)
              .reduce((acc, movement) => acc + parseFloat(movement.value), 0);
            const exitsSum = data
              .filter(movement => movement.type === 0)
              .reduce((acc, movement) => acc + parseFloat(movement.value), 0);
            setEntries(entriesSum);
            setExits(exitsSum);
          }
        }
      } catch (error) {
        Alert.alert('Erro', 'Erro ao buscar movimentações');
      }
    };

    fetchUserData();
    fetchMovements();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name={name || 'Usuário'} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Entradas</Text>
          <Text style={styles.balanceValue}>R$ {entries.toFixed(2)}</Text>
          <Text style={styles.balanceTitle}>Saídas</Text>
          <Text style={styles.balanceValue}>R$ {exits.toFixed(2)}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
          data={movements}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements item={item} />}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleModal}
          >
            <Text style={styles.buttonText}>Comprar ticket de comida</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          // Adicione a funcionalidade para o segundo botão aqui
          >
            <Text style={styles.buttonText}>Outro Botão</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Seg-Sex 7:00-11:00</Text>
        </View>
      </Modal>
    </View>
  );
}
