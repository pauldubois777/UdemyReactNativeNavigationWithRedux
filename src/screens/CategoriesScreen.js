import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const CategoriesScreen = props => {
  const {
    navigation: { navigate }
  } = props;

  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          navigate({ routeName: 'CategoryMealsScreen' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default CategoriesScreen;
