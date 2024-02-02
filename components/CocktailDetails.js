import { ActivityIndicator, StyleSheet, View, Text, Image } from 'react-native';


export default function CocktailDetails({ cocktail })
{
   let ingredients = []
   let measures = []

      return (
      <View style={styles.container}>
         <Text style={styles.title}>{cocktail.strDrink}</Text>
         <Image
            style={styles.image}
            source= {{uri: cocktail.strDrinkThumb}}
         />
         <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
      </View>
      )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
   fontSize: 30,
   color: 'white',
   margin: 20
  },
  image: {
   height: 300,
   width: 300
  },
  instructions: {
   color: 'white',
   fontSize: 14,
   width: 260,
   backgroundColor: 'rgba(255,255,255,0.3)',
   padding: 20,
   margin: 20
  }
})