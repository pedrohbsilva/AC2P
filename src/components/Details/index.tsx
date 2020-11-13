import React from 'react';
import { View, Text, Image } from 'react-native';
import { NumberToReal } from '../../utils/NumberToReal';
import { RectButton } from 'react-native-gesture-handler';

import uberX from '../../assets/ac2p1.png';

import styles from './style';

interface DetailsProps {
  distance: number;
}

const Details: React.FC<DetailsProps> = ({ distance }) => {

  const cost = distance * 2.25;

  return <>
    <View style={styles.container}>
      {/* <Text style={styles.typeTitle}>Popular</Text> */}
      <Text style={styles.typeDescription}>Viagens acessiveis</Text>

      <Image source={uberX} style={styles.typeImage} />
      <Text style={styles.typeTitle}>AC2P Driver</Text>
      <Text style={styles.typeDescription}>{NumberToReal(cost)}</Text>

      <RectButton style={styles.requestButton}  onPress={() => { alert(`Parabéns você efetuou a solicitação da corrida no valor de ${NumberToReal(cost)}`) }}>
        <Text style={styles.requestButtonText}>Solicitar carro</Text>
      </RectButton>
    </View>
  </>;
}

export default Details;