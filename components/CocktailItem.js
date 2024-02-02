import { Pressable, Image, Text, StyleSheet, View } from 'react-native';


export default function CocktailItem({ navigation, title, image, cocktailId })
{
   return (

   <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => {
          navigation.navigate('Details', {
            cocktailId: cocktailId,
          })
        }}>
         <Image
            style={styles.image}
            source= {{uri: image}}
         />
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.title}>{cocktailId}</Text>
      </Pressable>
   </View>
   )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    height: 360,
    width: 320,
    padding: 30
  },
  title: {
  fontSize: 20,
  color: 'black',
  paddingBottom: 10
 },
 image: {
   height: 260,
   width: 260,
   borderRadius: 5,
   padding: 20,
   margin: 20,
   borderColor: 'red',
   borderWidth: 2
 },
 pressable: {
   alignItems: 'center',
   justifyContent: 'center',
 }
})