import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const mockUsers = [
    { id: 1, email: 'user@example.com', name: 'Otavio', tickets: 0 },
    { id: 2, email: 'admin@admin.com', name: 'Admin', tickets: 10 },
];

export default function Admin() {
    const navigation = useNavigation();
    const [nameInput, setNameInput] = useState('');
    const [user, setUser] = useState<{ name: string, tickets: number, id: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [addValue, setAddValue] = useState('');
    const [removeValue, setRemoveValue] = useState('');
    //código com base de dados 
    /*const { data: users, error: searchError } = await supabase
  .from('users') // Nome da tabela
  .select('*')
  .eq('name', nameInput); // Filtro pelo nome

if (searchError) {
  setError('Erro ao buscar usuário');
  return;
}

if (users && users.length > 0) {
  setUser(users[0]);
} else {
  setError('Usuário não encontrado');
  setUser(null);
}*/
    const handleSearch = () => {
        setError(null);
        const foundUser = mockUsers.find(user => user.name.toLowerCase() === nameInput.toLowerCase());
        if (foundUser) {
            setUser(foundUser);
        } else {
            setError('Usuário não encontrado');
            setUser(null);
        }
    };
    //código com base de dados 
    /*const handleAddTicket = async () => {
    if (user) {
      // Atualiza o número de tickets no banco de dados
      const { error: updateError } = await supabase
        .from('users') // Nome da tabela
        .update({ tickets: user.tickets + 1 })
        .eq('id', user.id); // Filtro pelo ID

      if (updateError) {
        setError('Erro ao adicionar ticket');
        return;
      }

      setUser({ ...user, tickets: user.tickets + 1 });
      alert('Ticket adicionado com sucesso');
    }
  };*/


    /*  const handleRemoveTicket = async () => {
    if (user) {
      if (user.tickets > 0) {
        // Atualiza o número de tickets no banco de dados
        const { error: updateError } = await supabase
          .from('users') // Nome da tabela
          .update({ tickets: user.tickets - 1 })
          .eq('id', user.id); // Filtro pelo ID

        if (updateError) {
          setError('Erro ao remover ticket');
          return;
        }

        setUser({ ...user, tickets: user.tickets - 1 });
        alert('Ticket removido com sucesso');
      } else {
        setError('Nenhum ticket para remover');
      }
    }*/
    const handleAddTickets = () => {
        if (user && addValue) {
            const newTickets = user.tickets + parseInt(addValue);
            setUser({ ...user, tickets: newTickets });
            setAddValue('');
            alert('Tickets adicionados com sucesso');
        }
    };

    const handleRemoveTickets = () => {
        if (user && removeValue) {
            const newTickets = user.tickets - parseInt(removeValue);
            if (newTickets >= 0) {
                setUser({ ...user, tickets: newTickets });
                setRemoveValue('');
                alert('Tickets removidos com sucesso');
            } else {
                setError('Não há tickets suficientes para remover');
            } 5
        }
    };
    const handleLogout = () => {
        // Clear any user session or authentication details here
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administração de Usuários</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o nome do usuário"
                value={nameInput}
                onChangeText={setNameInput}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSearch}
            >
                <Text style={styles.buttonText}>Buscar Usuário</Text>
            </TouchableOpacity>

            {user ? (
                <>
                    <Text style={styles.infoText}>Nome: {user.name}</Text>
                    <Text style={styles.infoText}>Número de Matrícula: {user.id}</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Adicionar valor de tickets"
                        keyboardType="numeric"
                        value={addValue}
                        onChangeText={setAddValue}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleAddTickets}
                    >
                        <Text style={styles.buttonText}>Adicionar Tickets</Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Remover valor de tickets"
                        keyboardType="numeric"
                        value={removeValue}
                        onChangeText={setRemoveValue}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRemoveTickets}
                    >
                        <Text style={styles.buttonText}>Remover Tickets</Text>
                    </TouchableOpacity>

                    <Text style={styles.infoText}>Tickets: {user.tickets}</Text>
                </>
            ) : null}

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
