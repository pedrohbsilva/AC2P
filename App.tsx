import Routes from './src/routes/index';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './src/hooks';


const App: React.FC = () => {
  
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {

    return <AppLoading />

  } else {

    return( 
    <NavigationContainer>
      
    <StatusBar style="dark" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  )
  }

}

export default App;