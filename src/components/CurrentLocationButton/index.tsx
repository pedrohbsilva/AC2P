import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

interface CurrentLocationButtonProps{
  cb(): void;
  bottom?: number;
}

const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = (props) => {
  const bottom = props.bottom ? props.bottom : 65
  return (
    <Container style={[styles.container, {top: HEIGHT - bottom}]}>
        <MaterialIcons 
          name="my-location" 
          color="#fff"
          size={25}
          onPress={() => {props.cb()}}
        />
    </Container>
  );
}

export default CurrentLocationButton;

const styles = StyleSheet.create({

  container: {
    left: WIDTH-70,
    shadowColor: '#000000',
    shadowRadius: 5,
    elevation: 7,
    shadowOpacity: 1.0,
  },
});
