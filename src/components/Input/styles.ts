import styled, { css } from 'styled-components/native';
import FeatherIcon from '@expo/vector-icons/Feather';
import { Platform } from 'react-native';

interface ContainerProps{
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: transparent;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #A0A0A0;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;

  ${(props) => props.isErrored && css`
    border-color: #DA5757;
  `}

  ${(props) => props.isFocused && css`
    border-color: #009EBA;
  `}
`;
export const TextInput = styled.TextInput`
  width: 50%;
  flex:1;
  color: #5A5A5A;
  font-size: 16px;
  font-family: 'Poppins_300Light';
  ${Platform.OS === 'web'
    ? css`
  outline-color: none;
  outline-offset: 0;
  outline-style: none;
  outline-width: 0;
  ` : undefined}
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
