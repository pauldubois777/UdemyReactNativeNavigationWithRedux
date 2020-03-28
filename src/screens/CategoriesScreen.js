import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default CategoriesScreen;
