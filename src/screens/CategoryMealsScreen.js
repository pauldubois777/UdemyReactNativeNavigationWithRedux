import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const CategoryMealsScreen = props => {
  const {
    navigation: { navigate }
  } = props;

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
      <Button
        title="Meal Detail"
        onPress={() => {
          navigate({ routeName: 'MealDetailScreen' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default CategoryMealsScreen;
