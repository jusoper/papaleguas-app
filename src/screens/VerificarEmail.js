import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const VerificarEmail = () => {
  const navigation = useNavigation();

  const handleCriarNovaContaPress = () => {
    navigation.navigate('CriarNovaConta');
  };

  const handleCriarSenhaPress = () => {
    navigation.navigate('CriarSenha');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.title}>Insira o código de verificação que foi enviado ao seu e-mail:</Text>
      
      {/* Campos para inserir o código de verificação */}
      <View style={styles.codeContainer}>
        <TextInput style={styles.codeInput} maxLength={1} />
        <TextInput style={styles.codeInput} maxLength={1} />
        <TextInput style={styles.codeInput} maxLength={1} />
        <TextInput style={styles.codeInput} maxLength={1} />
      </View>

      <Text style={styles.paragraph}>Não recebeu o código?</Text>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Reenviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleCriarSenhaPress}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 999, // Ajuste a ordem de empilhamento conforme necessário
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    color: '#000000',
    textAlign: 'left',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1.5,
    borderColor: '#525252',
    width: 70,
    height: 80,
    textAlign: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  resendButton: {
    marginBottom: 40,
  },
  paragraph: {
    color: '#525252',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
  },
  resendText: {
    color: '#2B2D82',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
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
    bottom: 200,
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

export default VerificarEmail;
