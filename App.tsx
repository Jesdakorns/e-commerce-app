/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './src/type';
import {configureFonts, MD3LightTheme, PaperProvider} from 'react-native-paper';
import {themeColor} from './src/utils/themeColor';
import {MD3Type} from 'react-native-paper/lib/typescript/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const fontConfig: any = {
  web: {
    regular: {
      fontFamily: 'Kanit-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Kanit-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Kanit-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Kanit-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Kanit-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Kanit-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Kanit-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Kanit-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Kanit-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Kanit-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Kanit-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Kanit-Thin',
      fontWeight: 'normal',
    },
  },
};

const fontConfig1 = {
  fontFamily: 'Kanit-Regular',
};
const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  fonts: configureFonts({config: fontConfig1}),
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: themeColor.PRIMARY_COLOR,
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'white'},
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

// const HomeTabs = () => {
//   return <div>App</div>;
// };
