import React from 'react';
import { useScreens } from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';

useScreens(); // Implements high performance screens

const App = () => {
  return <AppNavigator />;
};

export default App;
