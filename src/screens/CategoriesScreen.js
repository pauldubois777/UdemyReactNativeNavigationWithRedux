import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import commonStyles from '../constants/commonStyles';
import { CATEGORIES } from '../mocks/mockData';

const CategoriesScreen = props => {
  const {
    navigation: { navigate }
  } = props;

  const renderGridItem = itemData => {
    const { item } = itemData;

    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: commonStyles.screen
});

export default CategoriesScreen;
