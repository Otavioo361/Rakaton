// src/pages/Admin/index.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from 'react-native';
import { supabase } from '../../services/supabase';
import colors from '../../theme/colors';

export default function Admin() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [amountToDeduct, setAmountToDeduct] = useState('');

    const fetchUserName = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('name')
                .eq('email', email)
                .single();

            if (error || !data) {
                Alert.alert('Erro', 'Usuário não encontrado');
                setName('');
            } else {
                setName(data.name);
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao buscar dados do usuário');
        }
    };

    const deductBalance = async () => {
        if (isNaN(parseFloat(amountToDeduct)) || parseFloat(amountToDeduct) <= 0) {
            Alert.alert('Erro', 'Insira um valor válido para descontar');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('movements')
                .update({ value: -amountToDeduct })
                .eq('user_email', email)
                .single();

            if (error) {
                Alert.alert('Erro', 'Erro ao descontar saldo');
            } else {
                Alert.alert('Sucesso', 'Saldo descontado com sucesso');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao atualizar saldo');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administração</Text>

            <TextInput
                style={styles.input}
                placeholder="Informe o e-mail do usuário"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={fetchUserName}>
                <Text style={styles.buttonText}>Buscar Nome</Text>
            </TouchableOpacity>

            {name ? (
                <>
                    <Text style={styles.nameText}>Nome: {name}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Valor para descontar"
                        keyboardType="numeric"
                        value={amountToDeduct}
                        onChangeText={setAmountToDeduct}
                    />
                    <TouchableOpacity style={styles.button} onPress={deductBalance}>
                        <Text style={styles.buttonText}>Descontar Saldo</Text>
                    </TouchableOpacity>
                </>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.opacity_white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_300,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.dark_purple,
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});
