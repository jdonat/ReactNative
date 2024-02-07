import { Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux'

export default function IngredientItem({ ingredient, measure })
{
    let quantity = measure
    //Convert oz to cl section
    const unitsSystem = useSelector((state) => state.unitsHandler.unitsSystem)
    if(measure != null)
    { 
        if(unitsSystem)
        {
            let index = measure.search('oz')
            if(index !== -1)
            {
                let inte
                let cl
                let num
                let den
                if(index > 2)
                {
                    if(index < 5)
                    {
                        let qt = measure.slice(0, index-1)

                        i = qt.indexOf('/')
                        if(i != -1)
                        {
                            num = parseInt(qt.slice(i-1, i))
                            den = parseInt(qt.slice(i+1, i+2))
                            console.log("num:"+num+" den:"+den)
                            let res = num/den
                            cl = ((Math.round((res)*28.34952))/10).toString()
                        }
                        else{
                            i = qt.indexOf('.')
                            if(i != -1)
                            {
                                num = parseFloat(qt.slice(i-1, i+2))
                                oz = ((Math.round((num)*28.34952))/10).toString()
                            }
                        }
                    }
                    else{
                        let qt = measure.slice(0, index-1)
                        let i = qt.indexOf(' ')
                        inte = parseInt(qt.slice(0, i))
                        i = qt.indexOf('/')
                        num = parseInt(qt.slice(i-1, i))
                        den = parseInt(qt.slice(i+1, i+2))
                        let n = parseInt(num)
                        let d = parseInt(den)
                        let res = n/d
                        res += inte
                        cl = ((Math.round((res)*28.34952))/10).toString()
                    }
                    
                }
                else{
                    cl = (Math.round(parseInt(measure.charAt(index-2))*2.834952)).toString()
                }   
                quantity = cl+" cl"+measure.slice(index+2)
            }
        }
        else{

            let index = measure.search('cl')
            if(index !== -1)
            {
                let inte
                let oz
                let num
                let den
                if(index > 2)
                {
                    if(index < 5)
                    {
                        let qt = measure.slice(0, index-1)

                        i = qt.indexOf('/')
                        if(i != -1)
                        {
                            num = parseInt(qt.slice(i-1, i))
                            den = parseInt(qt.slice(i+1, i+2))
                            console.log("num:"+num+" den:"+den)
                            let res = n/d
                            oz = ((Math.round((res)*3.527396))/10).toString()
                        }
                        else{
                            i = qt.indexOf('.')
                            if(i != -1)
                            {
                                num = parseFloat(qt.slice(i-1, i+2))
                                oz = ((Math.round((num)*3.527396))/10).toString()
                            }
                            
                        }
                        
                    }
                    else {
                        let qt = measure.slice(0, index-1)
                        let i = qt.indexOf(' ')
                        inte = parseInt(qt.slice(0, i))
                        i = qt.indexOf('/')
                        num = parseInt(qt.slice(i-1, i))
                        den = parseInt(qt.slice(i+1, i+2))
                        let n = parseInt(num)
                        let d = parseInt(den)
                        let res = n/d
                        res += inte
                        oz = ((Math.round((res)*3.527396))/10).toString()
                    }

                }
                else{
                    oz = ((Math.round(parseInt(measure.charAt(index-2))*3.527396))/10).toString()
                }   
                quantity = oz+" oz"+measure.slice(index+2)
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