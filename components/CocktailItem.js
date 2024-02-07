import { Pressable, Image, Text, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { likedAction } from '../features/liked/likedSlice'

export default function CocktailItem({ navigation, title, image, cocktailId, likeArray })
{
  const dispatch = useDispatch()

  const index = likeArray.findIndex((el) => el === cocktailId)
  const liked = index !== -1

  function changeImage(){
    dispatch(likedAction(cocktailId))
  }

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
      </Pressable>
      <View style={styles.underImg}>
        <Pressable style={styles.logoContainerLeft} onPress={() => {
          changeImage()
          }}>
          <Image
                style={styles.logo}
                source= {liked ? require('../assets/liked.png') : require('../assets/like.png')}
          />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.logoContainerRight} onPress={() => {
          changeImage()
          }}>
          <Image
                style={styles.logo}
                source= {liked ? require('../assets/liked.png') : require('../assets/like.png')}
          />
        </Pressable>
      </View>
   </View>
   )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(101,83,47,0.5)',
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
  fontSize: 26,
  color: 'white',
  paddingBottom: 10,
  fontWeight: 'bold',
  textAlign: 'center'
 },
 image: {
   height: 260,
   width: 260,
   borderRadius: 5,
   padding: 20,
   margin: 20,
 },
 pressable: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 underImg: {
    flexDirection: 'row'
 },
 logoContainerLeft: {
    position: 'relative',
    top: 12,
    right: 10
 },
 logoContainerRight: {
  position: 'relative',
  top: 12,
  left: 10
},
 logo: {
  height: 20,
  width: 20,
 }
})