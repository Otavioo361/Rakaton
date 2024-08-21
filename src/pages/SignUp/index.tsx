// src/pages/SignUp/index.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../services/supabase';
import styles from "./styles";

export default function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, password }]);

        if (error) {
            Alert.alert('Erro', error.message);
        } else {
            Alert.alert('Sucesso', 'Conta criada com sucesso');
            navigation.navigate('SignIn');
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={500}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Crie sua conta</Text>
            </Animatable.View>

            <Animatable.View
                animation="fadeInUp"
                style={styles.containerForm}
            >
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Informe seu nome..."
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Informe e-mail de acesso..."
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Informe senha de acesso..."
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.registerText}>
                        Já possui uma conta? Faça login...
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
