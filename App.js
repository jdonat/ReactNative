import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import MyTabBar from './components/MyTabBar'
import HomePage from './screens/HomePage'
import Details from './screens/Details'
import Favorites from './screens/Favorites'
import Search from './screens/Search'

export default function App() {

  const Stack = createNativeStackNavigator()

    return (
      <Provider store={store}>
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
          <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>

      </NavigationContainer>
      </Provider>
    );

}
