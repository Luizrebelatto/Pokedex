import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, View } from 'react-native';

import theme from './src/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}