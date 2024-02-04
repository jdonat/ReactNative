import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyTabBar from './components/MyTabBar'
import HomePage from './screens/HomePage'
import Details from './screens/Details'
import Favorites from './screens/Favorites'

export default function App() {

  const Stack = createNativeStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomePage}
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen
          name="MyTabBar"
          component={MyTabBar}
          
        />

          <Stack.Screen name="HomePage" component={HomePage}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="Favorites" component={Favorites}/>
      </Stack.Navigator>

      </NavigationContainer>
      
    );

}
