import React, { useRef, useCallback, useState } from 'react';
import {
  View,Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert, ActivityIndicator,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import Input from '../../components/Input';

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ListOptions,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SignUpFormData {
  name: string;
  lastName: string;
  email: string;
  bornDate: string;
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const lastNameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const bornDateInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');


  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      setIsLoading(true);
      try {
          navigation.navigate('SignIn');
          setIsLoading(false);
          alert(`Cadastro efetuado com sucesso!`);

      } catch (error) {
        setIsLoading(false);
        alert(`Ocorreu um erro ao fazer o cadastro, tente novamente.`)
      }
    },
    [navigation],
  );


  return (
    <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
          <Text>Faça seu cadastro</Text>
        </View>
        <ListOptions
          contentContainerStyle={Platform.OS === 'web' ? { flex: 1 } : undefined}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <FlashMessage/>
            <Form ref={formRef} onSubmit={handleSignUp} style={{ marginTop: 50 }}>
              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="name"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => (
                lastNameInputRef.current?.focus()
                )}
              />

              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="lastName"
                placeholder="Sobrenome"
                returnKeyType="next"
                onSubmitEditing={() => (
                emailInputRef.current?.focus()
                )}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => (
                bornDateInputRef.current?.focus()
                )}
              />
              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="bornDate"
                value={date}
                mask="date"
                placeholder="Data de nascimento"
                returnKeyType="next"
                keyboardType="numbers-and-punctuation"
                inputMaskChange={(text: string) => setDate(text)}
                onSubmitEditing={() => (
                phoneInputRef.current?.focus()
                )}
              />
              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="phone"
                mask="phone"
                value={phone}
                keyboardType="numbers-and-punctuation"
                inputMaskChange={(text:string) => setPhone(text)}
                placeholder="Telefone"
                
                returnKeyType="next"
                onSubmitEditing={() => (
                passwordInputRef.current?.focus()
                )}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <TouchableOpacity onPress={() => formRef.current?.submitForm()}>
                <Text>
                Cadastrar
                </Text>
              </TouchableOpacity>
            </Form>

            <CreateAccountButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={20} color="#C4C4C4" />
              <CreateAccountButtonText>
                Voltar para login
              </CreateAccountButtonText>
            </CreateAccountButton>
          </Container>
        </ListOptions>
      </SafeAreaView>
    </KeyboardAvoidingView>
  </>
  );
}

export default SignUp;

