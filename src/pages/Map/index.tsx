import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapComponent from '../../components/Map';
import { Feather } from '@expo/vector-icons';

import {Container, TextMain} from './styles';

const Map: React.FC = () => {
  if (process.env.API_GOOGLEMAPS) {
    return (
      <>
        <View style={styles.container}>
          <MapComponent />
        </View>
      </>
    );
  } else {
    return (
      <Container>
        <Feather name="alert-circle" size={35} />
        <TextMain>
          Para poder exibir o sistema, é necessário que defina uma chave de API válida do Google Maps.
        </TextMain>
      </Container>
    )
  }
}

export default Map;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
