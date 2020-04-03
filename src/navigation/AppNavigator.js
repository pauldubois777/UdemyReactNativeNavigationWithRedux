import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';

const MealsStackNavigator = createStackNavigator(
  {
    CategoriesScreen: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMealsScreen: {
      screen: CategoryMealsScreen,
      navigationOptions: ({ navigation }) => {
        const {
          state: {
            params: {
              category: { title, color }
            }
          }
        } = navigation;

        return {
          headerTitle: `${title} Meals`,
          headerStyle: {
            backgroundColor: color
          }
        };
      }
    },
    MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: '',
      headerStyle: {
        backgroundColor: Colors.headerBackground
      },
      headerTintColor: Colors.headerText
    }
  }
);

const AppNavigator = createAppContainer(MealsStackNavigator);

export default AppNavigator;
