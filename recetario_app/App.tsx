import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const newTheme = {
  //       dark: true,
  //       colors: {
  //         background: '#282828'
  //       },
  // }

  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer theme={theme}>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
