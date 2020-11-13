import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
export const ListOptions = styled.ScrollView.attrs({
  vertical: true,
})`
flex: 1;
`;
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #C4C4C4;
  font-size: 18px;
  font-family: 'Poppins_600SemiBold';
`;

    
export const CreateAccountButton = styled.TouchableOpacity`

  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #C4C4C4;
  font-size: 18px;
  font-family: 'Poppins_300Light';
  margin-left: 16px;
  text-decoration-line: underline;
`;
