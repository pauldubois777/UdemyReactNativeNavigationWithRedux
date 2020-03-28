import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default CategoryMealsScreen;
