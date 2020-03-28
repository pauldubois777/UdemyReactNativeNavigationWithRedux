import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default FiltersScreen;
