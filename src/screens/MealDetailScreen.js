import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const MealsScreen = props => {
  const {
    navigation: { goBack, popToTop }
  } = props;

  return (
    <View style={styles.screen}>
      <Text>Meals Screen</Text>
      <Button
        title="<- Go Back"
        onPress={() => {
          goBack();
        }}
      />
      <Button
        title="Back to Categories"
        onPress={() => {
          popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default MealsScreen;
