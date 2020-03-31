import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../mocks/mockData';
import CategoryItem from '../components/CategoryItem';
import Colors from '../constants/colors';

const CategoriesScreen = props => {
  const {
    navigation: { navigate }
  } = props;

  const renderCategoryItem = itemData => {
    const { item } = itemData;

    return (
      <CategoryItem
        item={item}
        onPress={() => navigate('CategoryMealsScreen')}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.headerBackground
  },
  headerTintColor: Colors.headerText
};

export default CategoriesScreen;
