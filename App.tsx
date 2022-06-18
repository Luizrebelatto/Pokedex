import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Text, View } from 'react-native';
import theme from './src/global/theme';
import { Home } from './src/screens/Home';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  };
    
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}