import React from 'react';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';

enableScreens(); // Enable high performance screens

const App = () => {
  return <AppNavigator />;
};

export default App;
