import React, { useRef, useCallback, useState } from 'react';
import {
  View,
  Text, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  TextInput, 
  Alert, 
  ActivityIndicator,
  Picker
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ListOptions,
  ContainerColor,
  ContainerButton,
  TextButton,
  TextSignUp
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../utils/api';

interface SignUpFormData {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  car: string;
  car_plate: string;
  cnh: string;
}

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const cpfInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const bornDateInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [typeUser, setTypeUser] = useState(0)
  const handleSignUp = async (data: SignUpFormData) => {
      setIsLoading(true);
      const { 
        name,
        email,
        phone,
        password,
        cpf,
        car,
        car_plate,
        cnh,
      } = data
      try {
          await api.post('/user/register', {
            name, email, phone, password, cpf,car, car_plate,
            cnh, type_user: typeUser
          });
          navigation.navigate('SignIn');
          setIsLoading(false);
          alert(`Cadastro efetuado com sucesso!`);

      } catch (error) {
        console.log(error)
        setIsLoading(false);
        alert(`Ocorreu um erro ao fazer o cadastro, tente novamente.`)
      }
    }


  return (
    <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ListOptions
          contentContainerStyle={Platform.OS === 'web' ? { flex: 1 } : undefined}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 90, marginBottom: -20 }}>
              <TextSignUp>Faça seu cadastro</TextSignUp>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp} style={{ marginTop: 50 }}>
              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="name"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => (
                cpfInputRef.current?.focus()
                )}
              />

              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="cpf"
                placeholder="CPF"
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
                name="phone"
                mask="phone"
                value={phone}
                keyboardType="numbers-and-punctuation"
                inputMaskChange={(text:string) => setPhone(text)}
                placeholder="Telefone"
                
                returnKeyType="next"
              />
              <Picker
                  selectedValue={typeUser}
                  onValueChange={(itemValue, itemIndex) => setTypeUser(itemValue)}
              >
                <Picker.Item label="Escolha seu perfil" value="" />
                <Picker.Item label="Passageiro" value="1" />
                <Picker.Item label="Motorista" value="2" />
              </Picker>
              
              {
                Number(typeUser) === 2 ? 
                <>
                  <Input
                  ref={passwordInputRef}
                  name="car"
                  placeholder="Qual seu carro?"
                  />
                  <Input
                  ref={passwordInputRef}
                  name="car_plate"
                  placeholder="Placa do carro"
                  />
                  <Input
                  ref={passwordInputRef}
                  name="cnh"
                  placeholder="Sua CNH"
                  />
                </>
                :
                <View>
                  <Text/>
                </View>
              }
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <ContainerColor>
                <ContainerButton onPress={() => formRef.current?.submitForm()}>
                  <TextButton>
                    Cadastrar
                  </TextButton>
                </ContainerButton>
              </ContainerColor>
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

