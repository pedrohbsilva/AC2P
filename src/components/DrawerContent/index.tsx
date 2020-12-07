import React from 'react';
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer'
import Feather from '@expo/vector-icons/Feather';
import { Drawer, Avatar,} from 'react-native-paper';
import { useAuth } from '../../hooks/auth';
import { CaptionPaper, ParagraphPaper, Row, Section, TitlePaper } from './styles';

const DrawerCustom: React.FC<DrawerContentComponentProps> = ({...props}) => {
  const { signOut, user } = useAuth();
  
  return(
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
      <View style={{flex: 1}}>
          <View style={{paddingLeft: 20,}}>
            <View style={{flexDirection:'row',marginTop: 15}}>
                <Avatar.Image 
                    source={{
                        uri: 'https://gravatar.com/avatar/fe4ed298cf27be4912740be16b60b407?s=400&d=robohash&r=x'
                    }}
                    size={50}
                />
                <View style={{marginLeft:15, flexDirection:'column'}}>
                  <TitlePaper>{user.name}</TitlePaper>
                    <Section>
                      <ParagraphPaper>Passageiro: </ParagraphPaper>
                      <CaptionPaper>5 Estrelas</CaptionPaper>
                    </Section>
                </View>
            </View>
            <Row>
                <Section>
                    <ParagraphPaper>7 </ParagraphPaper>
                    <CaptionPaper>Viagens</CaptionPaper>
                </Section>
                <Section>
                    <ParagraphPaper>5 </ParagraphPaper>
                    <CaptionPaper>Avaliados</CaptionPaper>
                </Section>
            </Row>
          </View>
        </View>
        <Drawer.Section>
          <DrawerItem 
            icon={({color, size}) => (
              <Feather name="map" size={size} color={color}/>

            )}
            label="Viajar"
            onPress={() => {props.navigation.navigate('Map')}}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Feather name="user" size={size} color={color}/>

            )}
            label="Meu perfil"
            onPress={() => {props.navigation.navigate('Profile')}}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Feather name="thumbs-up" size={size} color={color}/>

            )}
            label="Minhas avaliações"
            onPress={() => {props.navigation.navigate('Evaluation')}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      
      <Drawer.Section
        style={{marginBottom: 15, borderColor: '#f4f4f4', borderWidth: 1}}
      >   
      
          <DrawerItem 
            icon={({color, size})=>(
              <Feather name="log-out" size={size} color={color}/>
            )}
            label="Sair"
            onPress={()=> signOut()}
          />
      </Drawer.Section>
    </View>
  );
}

export default DrawerCustom;
