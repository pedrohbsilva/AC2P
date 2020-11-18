import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    background-color: #fff;
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-width: 1px;
    border-color: #ddd;
    align-items: center;
    padding: 20px;
    z-index: 1;
`;

export const Title = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 20px;
    color: #222;
`;

export const Description = styled.Text`
    font-family: 'Poppins_300Light';
    font-size: 14px;
    color: #666;
`;

export const ImageCar = styled.Image`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
`;

export const RequestButtonContainer = styled(LinearGradient).attrs({
    colors: ['#ca1ba7', '#2e77b4'],  
    start: [1, 0],
    end: [0, 1],
  })`
    height: 44px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 3px;
    margin-top: 10px;
  `;

export const RequestButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const RequestButtonText = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 18px;
    color: #fff;
`;

const styles = StyleSheet.create({

  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
});

export default styles;
