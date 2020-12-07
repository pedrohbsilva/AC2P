import React, { useRef, useCallback, useState } from 'react';
import {
  View, Text,SafeAreaView, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert, ActivityIndicator,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { showMessage, hideMessage } from 'react-native-flash-message';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/logo.jpeg';
import {
  Container,
  ContainerButton,
  ContainerColor,
  TextButton,
  CreateAccountButton,
  CreateAccountButtonText,
  ListOptions,
  ContainerImage
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface signInFormData {
  email: string;
  password: string;
}


const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const handleSignIn = useCallback(
    async (data: signInFormData) => {
      setIsLoading(true);
      console.log(signIn)
      try {
        console.log('teste')

        await signIn({
          email: data.email,
          password: data.password,
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error)

        setIsLoading(false);
        
        showMessage({
          message: 'Falha ao logar',
          description: 'Email e/ou senha inválidos',
          type: 'danger',
          duration: 5000,
        });
      }
    },
    [signIn],
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ListOptions
            keyboardShouldPersistTaps="handled"
          >
            <Container>
              <ContainerImage>
                <Image source={Logo} style={{height: 300, width: 300}}/>
              </ContainerImage>
              <Form ref={formRef} onSubmit={handleSignIn} style={{ marginTop: 100 }}>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => (
                  passwordInputRef.current?.focus()

                  )}
                />
                <Input
                  autoCapitalize="none"
                  ref={passwordInputRef}
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={() => (
                  formRef.current?.submitForm()
                  )}
                />
                <ContainerColor>
                  <ContainerButton 
                    onPress={() => formRef.current?.submitForm()}
                  >
                    {isLoading === false
                    
                      ? <TextButton>Entrar</TextButton> : (
                        <TextButton>Carregando...</TextButton>
                      )}
                  </ContainerButton>
                </ContainerColor>
                
              </Form>
              <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                <Icon name="log-in" size={20} color="#C4C4C4" />
                <CreateAccountButtonText>
                  Não tenho cadastro
                </CreateAccountButtonText>
              </CreateAccountButton>
            </Container>
          </ListOptions>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;