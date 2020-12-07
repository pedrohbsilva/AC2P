import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import MenuIcon from '../../components/Menu';

// import { Container } from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  }, []);
  return (
  <View>
    <Text>
      Perfil
    </Text>
  </View>
  );
}

export default Profile;