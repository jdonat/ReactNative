import { ActivityIndicator, ImageBackground, SafeAreaView, FlatList, Text, StyleSheet, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'

import MyTabBar from './components/MyTabBar'
import HomePage from './screens/HomePage'
import Details from './screens/Details'
import Favorites from './screens/Favorites'

export default function App() {

  const Stack = createNativeStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomePage}>
          <Stack.Screen
          name="MyTabBar"
          component={MyTabBar}
          options={{ headerShown: false }}
        />

          <Stack.Screen name="HomePage" component={HomePage} 
          options={{
          title: 'Cocktail Homepage',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
          />
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="Favorites" component={Favorites}/>
      </Stack.Navigator>

      </NavigationContainer>
      
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 title: {
  fontSize: 20
 }
});
