import { ActivityIndicator, SafeAreaView, Image, ImageBackground, Text, StyleSheet, View, FlatList, Pressable } from 'react-native';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CocktailItem from '../components/CocktailItem'


export default function HomePage({ navigation })
{

   const [cocktails, setCocktails] = useState([])
   const [index, setIndex] = useState(0)
   const [metricSystem, setMetricSystem] = useState(false)

   let likedArray = useSelector((state) => state.likedHandler.idLiked)
   let unitsSystem = useSelector((state) => state.unitsHandler.unitsSystem)

   const dispatch = useDispatch()

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
   function changeUnitsSystem()
   {
      dispatch(unitsAction())
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
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
         <View style={styles.centeredView}>
            <View style={styles.upperMenu}>
               <Pressable style={styles.logoSystem} onPress={() => {
                  changeUnitsSystem()
               }}>
                  <Image
                     style={styles.unitsSystemIcon}
                     source= {unitsSystem ? require('../assets/ozIcon.png') : require('../assets/onOzIcon.png')}
                  />
               </Pressable>
               <Text style={styles.title}>Cocktails</Text>
               <Pressable style={styles.logoSystem} onPress={() => {
                  changeUnitsSystem()
               }}>
                  <Image
                     style={styles.unitsSystemIcon}
                     source= {unitsSystem ? require('../assets/onCLIcon.png') : require('../assets/cLIcon.png')}
                  />
               </Pressable>
            </View>
               <FlatList
                  data={cocktails}
                  renderItem={({item}) => 
                  <CocktailItem 
                  navigation={navigation} title={item.strDrink} image={item.strDrinkThumb} 
                  cocktailId={item.idDrink} likeArray={likedArray} metricSystem={metricSystem}
                  />}
                  keyExtractor={item => item.idDrink}
                  onEndReached={fetchData}
                  onEndReachedThreshold={0.5}
                  
               />
            {/*</ScrollView>*/}
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
 upperMenu: {
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row',
   height: 80
 },
 unitsSystemIcon: {
   height: 40,
   width: 40,
   marginTop: 20
 },
 title: {
   color: 'white',
   fontSize: 30,
   paddingTop: 30,
   fontWeight: 'bold'
 },
 logoSystem: {
   padding: 20
 },
 centeredView: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 /*scrollView: {
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: 50
 },*/
 loader: {
   transform: [{ scaleX:2 }, { scaleY: 2 }],
 }
})