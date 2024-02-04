import { ScrollView, FlatList, ImageBackground, Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import CocktailItem from '../components/CocktailItem'

export default function Favorites({ navigation })
{
  let likedArray = useSelector((state) => state.likedHandler.idLiked)
  /*useEffect(() => {
    console.log("FAV START : ", likedArray)
  }, [])*/

  //const [likedArray, setLikedArray] = useState(useSelector((state) => state.likedHandler.idLiked))
  const [cocktails, setCocktails] = useState(null)

  async function fetchData(FavArray) {
    //console.log("FETCHDATA START : ",FavArray)
    let arr = []
    //console.log("FAV LENGTH : ", FavArray.length)
    for(let i = 0; i< FavArray.length; i++) 
    {
       try {
             const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${FavArray[i]}`)
             const data = await response.json()
             //console.log("data.drinks :", data.drinks)
             if(data.drinks != null)
             {
              arr.push(data.drinks[0])
             }
       } catch (error) {
          console.error(error)
       }
    }
    //console.log("DATA : "+arr)
    setCocktails(arr)

 }

 useEffect(() => {
  if(likedArray != null && likedArray != undefined)
    fetchData(likedArray)
 },[likedArray])

 /*useEffect(() => {
  setLikedArray(useSelector((state) => state.likedHandler.idLiked));
}, [useSelector((state) => state.likedHandler.idLiked)]);*/


   return (

   <View style={styles.container}>
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.centeredView}>
            <Text style={styles.title}>Favorites</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
               <FlatList
                  data={cocktails}
                  renderItem={({item}) => 
                  <CocktailItem navigation={navigation} title={item.strDrink} image={item.strDrinkThumb} cocktailId={item.idDrink} likeArray={likedArray}/>}
                  keyExtractor={item => 'favList'+item.idDrink}
                  horizontal={true}
               />
            </ScrollView>
      </View>

      </ImageBackground>

   </View>

   )


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
 title: {
   color: 'white',
   fontSize: 30,
   paddingTop: 60,
   fontWeight: 'bold'
 },
 centeredView: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 scrollView: {
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: 50
 },
 loader: {
   transform: [{ scaleX:2 }, { scaleY: 2 }],
 },
})