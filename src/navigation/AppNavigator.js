import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsStackNavigator = createStackNavigator({
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen
});

const AppNavigator = createAppContainer(MealsStackNavigator);

export default AppNavigator;
