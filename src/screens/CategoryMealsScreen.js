import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';
import Colors from '../constants/colors';

const CategoryMealsScreen = props => {
  const {
    navigation: { goBack, navigate }
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
      <Button
        title="<- Go Back"
        onPress={() => {
          goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

CategoryMealsScreen.navigationOptions = navigationProps => {
  const {
    navigation: { getParam }
  } = navigationProps;

  const category = getParam('category');

  return {
    headerTitle: category.title,
    headerStyle: {
      backgroundColor: Colors.headerBackground
    },
    headerTintColor: Colors.headerText
  };
};

export default CategoryMealsScreen;
