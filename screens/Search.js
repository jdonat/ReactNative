import { FlatList, Text, ImageBackground, StyleSheet, View, TextInput, Button } from 'react-native';

import { useState, useEffect } from 'react'

import SelectDropdown from 'react-native-select-dropdown'


//import TitlePage from '../components/TitlePage'

export default function Search({ navigation })
{
    const [searchCocktailText, setSearchCocktailText] = useState('');
    const [cocktails, setCocktails] = useState(null)
    const [queryResponse, setQueryResponse] = useState('')
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

async function fetchDataByCocktailName(text) {
  let arr = []
     try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
        const data = await response.json()
        if(data.drinks != null)
        {
           for(let j =0; j<data.drinks.length; j++)
           {
              arr.push(data.drinks[j])
           }

           setCocktails(arr)
        }
        else {
          setQueryResponse('No Results')
        }
     } catch (error) {
        console.error(error)
     }
     
  }

  useEffect(() => {
    fetchCocktailCategory()
   },[])

    if(cocktails == null)
    {
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
                 <Text style={styles.queryResp}>{queryResponse}</Text>
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
            </View>
           </ImageBackground>
        </View>
        )
    }
    else{
      navigation.navigate('Results', {
        cocktails: cocktails,
      })
      setCocktails(null)
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
    padding: 30,
    maxHeight: 120,
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
    marginTop: 20, 
    width: 200,
    paddingHorizontal: 5
  },
  searchButtonView: {
    width: 80,
    paddingTop: 10
  },
  queryResp: {
    color: 'red',
    fontSize: 20
  },
  dropdown: {
    backgroundColor: 'lightsalmon'
  },
  row: {
    
  },
  rowText: {
    color: 'white',
    fontSize: 20
  },
  dropdown1BtnStyle: {
    backgroundColor: 'lightsalmon',
    borderRadius: 8,
    marginBottom: 10,
    width: 220
  },
  dropdown1BtnTxtStyle: {
    color: 'white',
    fontSize: 20
  }
})