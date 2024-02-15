import { Text, ImageBackground, StyleSheet, View, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react'

import SelectDropdown from 'react-native-select-dropdown'
import Toast from 'react-native-root-toast'

export default function Search({ navigation })
{
    const [searchCocktailText, setSearchCocktailText] = useState('');
    const [cocktailCategories, setCocktailCategories] = useState([])
    

async function fetchCocktailCategory() {
  let arr = []
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
    const data = await response.json()
    if(data.drinks != null)
    {
       for(let j =0; j<data.drinks.length; j++)
       {
          arr.push(...Object.values(data.drinks[j]))
       }
       setCocktailCategories(arr)
    }
 } catch (error) {
    console.error(error)
 }
}

async function fetchDataByCocktailCategory(text) {
     try {
        const response = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${text}`)
        const data = await response.json()
        if(data.drinks != null)
        {

           navigation.navigate('Results', {
            cocktails: data.drinks,
          })
        }
      } catch (error) {
        console.error(error)
     }
}

async function fetchDataByCocktailName(text) {
     try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
        const data = await response.json()
        if(data.drinks != null)
        {
           navigation.navigate('Results', {
            cocktails: data.drinks,
          })
        }
        else {
          Toast.show(`No Results for this Cocktail Name`)
        }
     } catch (error) {
        console.error(error)
     }
  }

  useEffect(() => {
    fetchCocktailCategory()
   },[])

      return (
        <View style={styles.container}>
           <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
           <View style={styles.titleView}>
             <Text style={styles.title}>Search</Text>
           </View>
           <View style={styles.centeredView}>
             <View style={styles.searchView}>
                 <TextInput style={styles.inputCocktail}
                 onChangeText={setSearchCocktailText}
                 value={searchCocktailText}
                 placeholder='Search Cocktail By Name'
                 />
                 <View style={styles.searchButtonView}>
                     <Button 
                     onPress={() => fetchDataByCocktailName(searchCocktailText)}
                     title="Search"
                     color="lightsalmon"
                     accessibilityLabel="Search Cocktails"/>
                 </View>
             </View>
             <View style={styles.searchView}>
                 <SelectDropdown
                     dropdownStyle= {styles.dropdown}
                     rowStyle={styles.row}
                     rowTextStyle={styles.rowText}
                     buttonStyle={styles.dropdown1BtnStyle}
                     buttonTextStyle={styles.dropdown1BtnTxtStyle}
                     data={cocktailCategories}
                     defaultButtonText='Search by Category'
                     onSelect={(selectedItem) => {
                         fetchDataByCocktailCategory(selectedItem)
                     }}
                 />
             </View>
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
 titleView: {
  alignItems: 'center',
  justifyContent: 'center',
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
    marginTop: 50,
    padding: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  inputCocktail: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 5,
    fontSize: 16,
    marginTop: 0, 
    width: 200,
    paddingHorizontal: 5
  },
  searchButtonView: {
    width: 80,
    paddingTop: 10
  },
  dropdown: {
    backgroundColor: 'lightsalmon'
  },

  rowText: {
    color: 'white',
    fontSize: 20
  },
  dropdown1BtnStyle: {
    backgroundColor: 'lightsalmon',
    borderRadius: 10,
    width: 220
  },
  dropdown1BtnTxtStyle: {
    color: 'white',
    fontSize: 20
  }
})