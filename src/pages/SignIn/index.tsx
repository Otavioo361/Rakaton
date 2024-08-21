import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../services/supabase'; // Certifique-se de que o caminho está correto
import styles from './styles';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        style={styles.containerForm}
      >
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

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')} // Certifique-se de que 'SignUp' está correto
        >
          <Text style={styles.registerText}>
            Não possui uma conta? Registre-se...
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
