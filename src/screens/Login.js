import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleEntradaPress = () => {
    navigation.navigate('Entrada');
  };

  const handleEsqueciASenhaPress = () => {
    navigation.navigate('EsqueciASenha');
  };

  const handleCadastrarEscolhaPress = () => {
    navigation.navigate('CadastrarEscolha');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#525252" />
      </TouchableOpacity>

      <Text style={styles.subtitle}>Realize o login.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#525252"
          placeholderStyle={styles.placeholder}
          secureTextEntry={!senhaVisivel}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Icon name={senhaVisivel ? 'eye-slash' : 'eye'} size={24} color="#525252" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.esqueceuButton} onPress={handleEsqueciASenhaPress}>
        <Text style={styles.esqueceuText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleCadastrarEscolhaPress}>ENTRAR</Text>
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
    zIndex: 999,
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
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: '600',
  },
  esqueceuText: {
    color: '#2B2D82',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 20,
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

export default Login;