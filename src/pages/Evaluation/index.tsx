import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
 
import MenuIcon from '../../components/Menu';
  
const Evaluation: React.FC = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  }, []);
  return (
  <View>
    <Text>
      Avaliações
    </Text>
  </View>
  );
}

export default Evaluation;