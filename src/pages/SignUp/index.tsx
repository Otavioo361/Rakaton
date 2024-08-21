import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export default function SignUp() {
    const navigation = useNavigation();

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
                    style={styles.input}
                />

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Informe e-mail de acesso..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Informe senha de acesso..."
                    secureTextEntry={true}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')} // Navega para a tela SignIn
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('SignIn')} // Navega para a tela SignIn
                >
                    <Text style={styles.registerText}>
                        Já possui uma conta? Faça login...
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
