import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator();

export default function MyTabBar({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}