import { StyleSheet, Text, Image } from 'react-native';
import IngredientItem from './IngredientItem'

export default function CocktailDetails({ cocktail })
{
   let ingredients = [
      { id: 1, ingredient: cocktail.strIngredient1,  measure: cocktail.strMeasure1 },
      { id: 2, ingredient: cocktail.strIngredient2,  measure: cocktail.strMeasure2 },
      { id: 3, ingredient: cocktail.strIngredient3,  measure: cocktail.strMeasure3 },
      { id: 4, ingredient: cocktail.strIngredient4,  measure: cocktail.strMeasure4 },
      { id: 5, ingredient: cocktail.strIngredient5,  measure: cocktail.strMeasure5 },
      { id: 6, ingredient: cocktail.strIngredient6,  measure: cocktail.strMeasure6 },
      { id: 7, ingredient: cocktail.strIngredient7,  measure: cocktail.strMeasure7 },
      { id: 8, ingredient: cocktail.strIngredient8,  measure: cocktail.strMeasure8 },
      { id: 9, ingredient: cocktail.strIngredient9,  measure: cocktail.strMeasure9 },
      { id: 10, ingredient: cocktail.strIngredient10,  measure: cocktail.strMeasure10 },
      { id: 11, ingredient: cocktail.strIngredient11,  measure: cocktail.strMeasure11 },
      { id: 12, ingredient: cocktail.strIngredient12,  measure: cocktail.strMeasure12 },
      { id: 13, ingredient: cocktail.strIngredient13,  measure: cocktail.strMeasure13 },
      { id: 14, ingredient: cocktail.strIngredient14,  measure: cocktail.strMeasure14 },
      { id: 15, ingredient: cocktail.strIngredient15,  measure: cocktail.strMeasure15 },
   ]
   for(let i = 14; i>-1; i--)
   {
      if(ingredients[i].ingredient == null)
         ingredients.splice(i, 1)
   }
   console.log(ingredients)
      return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>{cocktail.strDrink}</Text>
         <ScrollView contentContainerStyle={styles.scrollView}>
            <Image
            style={styles.image}
            source= {{uri: cocktail.strDrinkThumb}}
            />
            <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
            <FlatList
               style={styles.recipe}
               data={ingredients}
               renderItem={({item}) => <IngredientItem ingredient={item.ingredient} measure={item.measure} />}
               keyExtractor={item => item.id}
               horizontal='true'
            />

         </ScrollView>
      </SafeAreaView>
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