import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const initialMovements = [
  { type: 'Entrada', amount: 1 },
  { type: 'Saída', amount: 1 },
  { type: 'Entrada', amount: 2 },
];

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tickets] = useState<number>(5); // Defina o número inicial de tickets aqui
  const [movements] = useState(initialMovements);
  const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica de logout, se necessário
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Nome do Usuário</Text>

        <View style={styles.ticketContainer}>
          <Text style={styles.ticketHeader}>Tickets Disponíveis:</Text>
          <Text style={styles.ticketCount}>{tickets}</Text>
        </View>
      </View>

      <ScrollView style={styles.movementsContainer}>
        <Text style={styles.movementsHeader}>Movimentações</Text>
        {movements.length > 0 ? (
          movements.map((movement, index) => (
            <Text key={index} style={styles.movementText}>
              {movement.type}: {movement.amount} ticket(s)
            </Text>
          ))
        ) : (
          <Text style={styles.movementText}>Nenhuma movimentação</Text>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Comprar ticket de comida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Seg-Sex 7:00-11:00</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
