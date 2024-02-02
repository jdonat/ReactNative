import { ImageBackground, Text, StyleSheet, View } from 'react-native';


export default function HomePage({ navigation })
{
   return (

   <View style={styles.container}>
      <ImageBackground source={require('../assets/bar-scene.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
         {/*<Text style={styles.title}>Cocktail Homepage</Text>
         <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />*/}
      <Text style={styles.title}>Favorites</Text>
      </ImageBackground>

   </View>

   )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 backgroundImage: {
   height: '100%',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
 },
  title: {
  fontSize: 20,
  paddingTop: 30,
  color: 'white'
 },

})