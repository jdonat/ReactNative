import { FlatList, Text, ImageBackground, StyleSheet, View } from 'react-native';

import { useSelector } from 'react-redux'
import CocktailItem from '../components/CocktailItem'


export default function Results({ route, navigation })
{
    const { cocktails } = route.params
    let likedArray = useSelector((state) => state.likedHandler.idLiked)

    return (
    <View style={styles.container}>
       <ImageBackground source={require('../assets/bar-scene.jpeg')} 
       resizeMode="cover" style={styles.backgroundImage} >
          <View style={styles.centeredView}>
            <Text style={styles.title}>Results</Text>
             <FlatList
                data={cocktails}
                renderItem={({item}) => 
                <CocktailItem 
                navigation={navigation} title={item.strDrink} image={item.strDrinkThumb} 
                cocktailId={item.idDrink} likeArray={likedArray}
                />}
                keyExtractor={item => item.idDrink}
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
      maxHeight: 730
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
  })