import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator();

export default function MyTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'darksalmon'},
        tabBarInactiveBackgroundColor: 'lightsalmon',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'darkslategrey',
      }}
      initialRouteName='HomePage'
    >
      <Tab.Screen name="HomePage" component={HomePage} options={{ tabBarLabel: 'Home', headerShown: false }}/>
      <Tab.Screen name="Favorites" component={Favorites} options={{ tabBarLabel: 'Favorites', headerShown: false }}/>
    </Tab.Navigator>
  );
}