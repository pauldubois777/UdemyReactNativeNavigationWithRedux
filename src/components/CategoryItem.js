import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CategoryItem = props => {
  const { item } = props;

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.categoryItemView}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
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
