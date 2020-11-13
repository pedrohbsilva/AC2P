import React, {
  useEffect, useRef, useImperativeHandle, forwardRef, useState, useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, TextInput, Icon } from './styles';
import {
  maskCep, maskCurrency, maskDate, maskPhone, maskCpf,
} from './masks';

interface InputProps extends TextInputProps{
  name: string;
  icon?: string;
  mask?: 'cep' | 'phone' | 'currency' | 'date' | 'cpf';
  inputMaskChange?: any;
}
interface InputValueReference{
  value: string;
}
interface InputRef{
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({
  name, icon, mask, inputMaskChange, ...rest
},
ref) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {
    registerField, defaultValue = '', fieldName, error,
  } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  function handleChange(text: string) {
    if (mask === 'cep') {
      const value = maskCep(text);
      inputMaskChange(value);
    }
    if (mask === 'phone') {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
    if (mask === 'currency') {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
    if (mask === 'date') {
      const value = maskDate(text);
      inputMaskChange(value);
    }
    if (mask === 'cpf') {
      const value = maskCpf(text);
      inputMaskChange(value);
    }
  }

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon name={icon} size={20} color={isFocused || isFilled ? '#009EBA' : '#666360'} />
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
          handleChange(value);
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
