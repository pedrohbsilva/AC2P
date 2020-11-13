import { StyleSheet, Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapStyle = styled(MapView)`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const LocationBox = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 3px;
  flex-direction: row;
  margin-top: 17.5px;
  max-width: 100px;
  align-items: center;
  justify-content: center;
`;

export const LocationText = styled.Text`
  color: #333;
  font-family: 'Poppins_600SemiBold';
  font-size: 10px;
  line-height: 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 8px;
  margin-left: 8px;
  max-width: 65px;
`;

export const LocationTimeBox = styled.View`
  background-color: #f11;
  padding-top: 5px;
  padding-bottom: 5px;
  border-width: 2px;
  border-color: #f11;
  align-items: center;
  justify-content: center;
`;

export const LocationTimeText = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 8px;
  color: #fff;
  text-align: center;
  height: 9px;
  flex: 1;
`;

export const LocationTimeTextSmall = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 8px;
  color: #fff;
  text-align: center;
  height: 8px;
`;

export const BackButton = styled(BorderlessButton)`
  position: absolute;
  top: ${Platform.select({ios: 60, android: 40})}px;
  left: 20px;
`;


const styles = StyleSheet.create({

  locationBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    elevation: 0.1,
    
  },

});

export default styles;