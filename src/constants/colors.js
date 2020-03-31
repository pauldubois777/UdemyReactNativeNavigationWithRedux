import { Platform } from 'react-native';

const android = Platform.OS === 'android';

export default {
  headerBackground: android ? '#99d6ff' : 'white',
  headerText: android ? '#595959' : '#1aa3ff'
};
