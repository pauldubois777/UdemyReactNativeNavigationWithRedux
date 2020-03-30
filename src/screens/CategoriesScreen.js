import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../mocks/mockData';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = props => {
  const {
    navigation: { navigate }
  } = props;

  const renderCategoryItem = itemData => {
    const { item } = itemData;

    return <CategoryItem item={item} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
