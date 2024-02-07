import { ActivityIndicator, Text, ImageBackground, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import CocktailDetails from '../components/CocktailDetails'

export default function Details({ route })
{
   const { cocktailId } = route.params
   const [cocktail, setCocktail] = useState(null)
   const [idCocktail, setIdCocktail] = useState(cocktailId)

   async function fetchData(id) {
      try {
         //console.log("COCKTAIL ID : ",id)
         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
         const data = await response.json()
         
         if(data.drinks != null)
         {
            setCocktail(...data.drinks)
         }
      } catch (error) {
         console.error(error)
      }
   }


   useEffect(() => {
      if(idCocktail != null && idCocktail != undefined)
      {
         fetchData(idCocktail)
      }
   },[idCocktail])
   if(cocktail == null){
      return (
         <View style={styles.container}>
            <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
               <ActivityIndicator size="large" color="white" style={styles.loader}/>
            </ImageBackground>
         </View>
      )
   }
   else{
      return (

         <View style={styles.container}>
            <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
               <CocktailDetails cocktail={cocktail} />
            </ImageBackground>
         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
 backgroundImage: {
   height: '100%',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
 },
 loader: {
   transform: [{ scaleX:2 }, { scaleY: 2 }],
 }
})