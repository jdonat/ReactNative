import { Text, ImageBackground, StyleSheet, View, TextInput, Button } from 'react-native';

import { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'


//import TitlePage from '../components/TitlePage'

export default function Search({ route, navigation })
{
    const [searchCocktailText, setSearchCocktailText] = useState('');
 //const [cocktails, setCocktails] = useState(null)
/*
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

    function searchByCocktailName()
    {

    }

   return (

   <View style={styles.container}>
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.centeredView}>
        <Text style={styles.title}>Search</Text>
      </View>
        <View style={styles.searchView}>
            <TextInput style={styles.inputCocktail}
            onChangeText={setSearchCocktailText}
            value={searchCocktailText}
            placeholder='Search Cocktail By Name'
            />
            <View style={styles.searchButtonView}>
                <Text>TEST</Text>
                <Button 
                onPress={searchByCocktailName}
                title="Search"
                color="lightsalmon"
                accessibilityLabel="Search Cocktails"/>
            </View>
        </View>
        <View style={styles.searchView}>
            <Text style={styles.categoryDropdownTitle}>Search by Category</Text>
            <SelectDropdown
                dropdownStyle= {styles.dropdown}
                rowStyle={styles.row}
                rowTextStyle={styles.rowText}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
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

 },
 centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
 },
 title: {
    color: 'white',
    fontSize: 30,
    paddingTop: 45,
    fontWeight: 'bold',
    width: 300,
    height: 100,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  searchView: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  inputCocktail: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 5,
    fontSize: 16,
    marginTop: 10, 
    width: 200
  },
  searchButtonView: {
    width: 80,
  },
  categoryDropdownTitle: {
    color: 'white',
    fontSize: 26,

    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  dropdown: {
    backgroundColor: 'lightsalmon'
  },
  row: {
    
  },
  rowText: {
    color: 'white',
    fontSize: 30
  },
  dropdown1BtnStyle: {
    backgroundColor: 'lightsalmon',
    borderRadius: 8,
  },
  dropdown1BtnTxtStyle: {
    color: 'white',
    fontSize: 30
  }
})