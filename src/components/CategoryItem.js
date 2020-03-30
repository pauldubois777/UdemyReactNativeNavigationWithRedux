import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryItem = props => {
  const { item } = props;

  return (
    <View style={styles.categoryItemView}>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemView: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoryItem;
