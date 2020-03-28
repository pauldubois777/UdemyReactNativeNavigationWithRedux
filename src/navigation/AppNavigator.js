import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealScreen from '../screens/MealScreen';

const MealsStackNavigator = createStackNavigator({
  CategoriesScreen,
  CategoryMealsScreen,
  MealScreen
});

const AppNavigator = createAppContainer(MealsStackNavigator);

export default AppNavigator;
