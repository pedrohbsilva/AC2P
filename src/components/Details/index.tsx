import React from 'react';
import { NumberToReal } from '../../utils/NumberToReal';

import ac2pCar from '../../assets/ac2p1.png';

import styles, { 
  Container, 
  Title, 
  Description, 
  ImageCar,
  RequestButton, 
  RequestButtonText,
  RequestButtonContainer
} from './style';

interface DetailsProps {
  distance: number;
}

const Details: React.FC<DetailsProps> = ({ distance }) => {

  const cost = distance * 2.25;
  return (
    <Container style={styles.container}>
      <Title>Viagens acessíveis</Title>

      <ImageCar source={ac2pCar} />
      <Title>AC2P Driver</Title>
      <Description>{NumberToReal(cost)}</Description>
      <RequestButtonContainer>
        <RequestButton onPress={() => { alert(`Parabéns você efetuou a solicitação da corrida no valor de ${NumberToReal(cost)}`) }}>
          <RequestButtonText>Solicitar carro</RequestButtonText>
        </RequestButton>
      </RequestButtonContainer>
    </Container>
);
}

export default Details;