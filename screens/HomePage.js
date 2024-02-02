import { ActivityIndicator, SafeAreaView, Button, ScrollView, ImageBackground, Image, Text, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react'
import CocktailItem from '../components/CocktailItem'


export default function HomePage({ navigation })
{

   
   const [cocktails, setCocktails] = useState(null)
 
   

   async function fetchData() {
      let arr = []
      for(let i = 0; i< 26; i++) 
      {
         try {
               let letter = String.fromCharCode(97 + i)
               //console.log("Lettre : ",letter)
               const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
               //console.log(response)
               const data = await response.json()
               if(data.drinks != null)
               {
                  //console.log("Data length : ",data.drinks.length)
                  for(let j =0; j<data.drinks.length; j++)
                  {
                     //console.log("Cocktail name : ", data.drinks[j].strDrink)
                     arr.push(data.drinks[j])
                  }
               }
         } catch (error) {
            console.error(error)
         }
         //console.log("array length :", arr.length)
      }
      for(let i = 0; i< 10; i++) 
      {
         try {
               //console.log("Chiffre :",i)
               const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${i}`)
               //console.log(response)
               const data = await response.json()
               if(data.drinks != null)
               {
                  //console.log("Data length : ",data.drinks.length)
                  for(let j =0; j<data.drinks.length; j++)
                  {
                     //console.log("Cocktail name : ", data.drinks[j].strDrink)
                     arr.push(data.drinks[j])
                  }
               }
         } catch (error) {
            console.error(error)
         }
      }
      setCocktails(arr)
   }

  useEffect(() => {
   fetchData()
  },[])

    /*useEffect(() => {
      //console.log("Data cocktail length : ",cocktails.length)
      //for(let i= 0; i<cocktails.length; i++)
      //console.log("IMAGE SOURCE : ", cocktails[i].strDrinkThumb)
  },[cocktails])*/
  if(cocktails == null)
  {
   return (
   <View style={styles.container}>
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
         <View style={styles.centeredView}>
            <ActivityIndicator size="large" color="white" style={styles.loader}/>
         </View>
      </ImageBackground>
   </View>
   )
  }
  else{
   return (
   <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollView}>
          <FlatList
            data={cocktails}
            renderItem={({item}) => <CocktailItem navigation={navigation} title={item.strDrink} image={item.strDrinkThumb} cocktailId={item.idDrink} />}
            keyExtractor={item => item.idDrink}
            horizontal={true}
          />
      </ScrollView>
      </ImageBackground>
   </SafeAreaView>
   )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 backgroundImage: {
   height: '100%',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
 },
 scrollView: {
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: 50
 },
 centeredView: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 loader: {
   transform: [{ scaleX:2 }, { scaleY: 2 }],
 }
})