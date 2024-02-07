import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Foundation from 'react-native-vector-icons/Foundation'

import HomePage from '../screens/HomePage'
import Favorites from '../screens/Favorites'
import Search from '../screens/Search'

const Tab = createBottomTabNavigator();

export default function MyTabBar() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'darksalmon', },
        tabBarLabelStyle: {fontSize: 14,},
        tabBarInactiveBackgroundColor: 'lightsalmon',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'darkslategrey',
      }}
      initialRouteName='HomePage'
    >
      <Tab.Screen name="HomePage" component={HomePage} options={{ tabBarLabel: 'Home', 
      headerShown: false, 
        tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
        ), 
      }}/>
      <Tab.Screen name="Favorites" component={Favorites} options={{ tabBarLabel: 'Favorites', headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Foundation name="heart" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: 'Search', headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Foundation name="magnifying-glass" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}