import { ActivityIndicator, SafeAreaView, ImageBackground, StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CocktailItem from '../components/CocktailItem'
import TitlePage from '../components/TitlePage'

export default function HomePage({ navigation })
{
   const [cocktails, setCocktails] = useState([])
   const [index, setIndex] = useState(0)

   let likedArray = useSelector((state) => state.likedHandler.idLiked)

   async function fetchData() {
      let arr = []
      if(index < 26)
      {
         let letter = String.fromCharCode(97 + index)
         try {
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
      }
      if(index > 25 && index < 35)
      {
         let i = index - 25
         try {
            //console.log("Lettre : ",letter)
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
      
      //console.log("COCKTAILS : ", cocktails)
      //console.log("Fetch Array : ", arr)
      setCocktails([...cocktails, ...arr])
      //console.log("FETCH #"+index)
      setIndex(index+1)
   }

  useEffect(() => {
   fetchData()
  },[])

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
      <ImageBackground source={require('../assets/bar-scene.jpeg')} 
      resizeMode="cover" style={styles.backgroundImage} >
         <View style={styles.centeredView}>
            <TitlePage title='Cocktails' />
            <FlatList
               data={cocktails}
               renderItem={({item}) => 
               <CocktailItem 
               navigation={navigation} title={item.strDrink} image={item.strDrinkThumb} 
               cocktailId={item.idDrink} likeArray={likedArray}
               />}
               keyExtractor={item => item.idDrink}
               onEndReached={fetchData}
               onEndReachedThreshold={0.5}
            />
         </View>
      </ImageBackground>
   </SafeAreaView>
   )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 backgroundImage: {
   height: '100%',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
 },
 centeredView: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 loader: {
   transform: [{ scaleX:2 }, { scaleY: 2 }],
 }
})