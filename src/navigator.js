import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Drawer from './containers/Drawer';
import HomeScreen from './containers/HomeScreen';
import SearchScreen from './containers/SearchScreen';
import DetailsScreen from './containers/DetailsScreen';
import CreditsScreen from './containers/CreditsScreen';

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Details: DetailsScreen,
  Credits: CreditsScreen,
}, {
  navigationOptions: {
    header: null,
  },
});

const AppNavigator = createDrawerNavigator({
  Home: StackNavigator,
}, {
  contentComponent: Drawer,
});

export default AppNavigator;
