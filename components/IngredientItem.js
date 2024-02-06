import { Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux'

export default function IngredientItem({ ingredient, measure })
{
    let quantity = measure
    //Convert oz to cl section
    let unitsSystem = useSelector((state) => state.unitsHandler.unitsSystem)
    if(unitsSystem)
    {
        if(measure != null)
        {
            let index = measure.search('oz')
            if(index !== -1)
            {
                result = ""
                let cl = Math.round(parseInt(measure.charAt(index-2))*28.34952/10).toString()
                
                quantity = cl+" cl"
            }
        }  
    }

    
    
   return (
   <View style={styles.container}>
        <Text style={styles.ingredient}>{ingredient}</Text>
        <Text style={styles.measure}>{quantity}</Text>
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