import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#ca1ba7', '#2e77b4'],  
  start: [1, 0],
  end: [0, 0],
})`
  z-index: 9;
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

