import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../screens/Logo.js';
import Entrada from '../screens/Entrada.js';
import Login from '../screens/Login.js';
import CriarNovaConta from '../screens/CriarNovaConta.js';
import EsqueciASenha from '../screens/EsqueciASenha.js';
import VerificarEmail from '../screens/VerificarEmail.js';
import CriarSenha from '../screens/CriarSenha.js';
import CadastrarEscolha from '../screens/CadastrarEscolha.js';
import CadastroProdutoRemetente from '../screens/CadastroProdutoRemetente.js';
import CadastroProdutoDestinatario from '../screens/CadastroProdutoDestinatario.js';
import CadastroProdutoPacote from '../screens/CadastroProdutoPacote.js';
import CadastroProdutoResumo from '../screens/CadastroProdutoResumo.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" headerMode="none">
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Entrada" component={Entrada} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CriarNovaConta" component={CriarNovaConta} />
        <Stack.Screen name="EsqueciASenha" component={EsqueciASenha} />
        <Stack.Screen name="VerificarEmail" component={VerificarEmail} />
        <Stack.Screen name="CriarSenha" component={CriarSenha} />
        <Stack.Screen name="CadastrarEscolha" component={CadastrarEscolha} />
        <Stack.Screen name="CadastroProdutoRemetente" component={CadastroProdutoRemetente} />
        <Stack.Screen name="CadastroProdutoDestinatario" component={CadastroProdutoDestinatario} />
        <Stack.Screen name="CadastroProdutoPacote" component={CadastroProdutoPacote} />
        <Stack.Screen name="CadastroProdutoResumo" component={CadastroProdutoResumo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
