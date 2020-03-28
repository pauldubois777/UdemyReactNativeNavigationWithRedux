import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const MealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Meals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default MealsScreen;
