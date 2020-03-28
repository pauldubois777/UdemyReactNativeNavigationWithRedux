import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';

const FavoritesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default FavoritesScreen;
