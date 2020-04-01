import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../constants/fonts';

const CategoryItem = props => {
  const { item, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryItemWrapper}>
      <View style={{ ...styles.categoryItemView, backgroundColor: item.color }}>
        <Text style={styles.categoryItemText} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItemWrapper: {
    flex: 1,
    margin: 15,
    height: 150
  },
  categoryItemView: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  categoryItemText: {
    fontFamily: fonts.bold,
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryItem;
