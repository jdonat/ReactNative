import { Text, StyleSheet, View } from 'react-native';


export default function IngredientItem({ ingredient, measure })
{
   return (
   <View style={styles.container}>
        <Text style={styles.ingredient}>{ingredient}</Text>
        <Text style={styles.measure}>{measure}</Text>
   </View>
   )
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginVertical: 10,
    },
    ingredient: {
        fontSize: 20,
        color: 'white',
    },
    measure: {
        fontSize: 16,
        color: 'white',
    }
})