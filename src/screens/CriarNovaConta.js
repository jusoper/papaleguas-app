import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome
import { useNavigation } from '@react-navigation/native';

const CriarNovaConta = () => {
  const navigation = useNavigation();

  const handleEntradaPress = () => {
    navigation.navigate('Entrada');
  };

  const handleVerificarEmailPress = () => {
    navigation.navigate('VerificarEmail');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.subtitle}>Crie uma nova conta:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu CPF"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu número de telefone"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Insira seu e-mail"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}onPress={handleVerificarEmailPress}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 999, // Ajuste a ordem de empilhamento conforme necessário
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2B2D82',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 50,
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 30,
    width: '100%',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#525252',
    borderWidth: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    color: '#2B2D82',
  },
  lastInput: {
    marginBottom: 40,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2B2D82',
    width: '100%',
    position: 'absolute',
    bottom: 150,
    left: 20,
    zIndex: 998, 
  },
  buttonText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CriarNovaConta;