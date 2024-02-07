//TitlePage.js
import { Image, Text, StyleSheet, View, Pressable } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { unitsAction } from '../features/units/unitsSlice'

export default function TitlePage({ title })
{

let unitsSystem = useSelector((state) => state.unitsHandler.unitsSystem)
//console.log("TitlePage - unitsSystem", unitsSystem)
const dispatch = useDispatch()


    return (
        <View style={styles.upperMenu}>
               <Pressable style={styles.logoSystem} onPress={() => {
                  dispatch(unitsAction())
               }}>
                  <Image
                     style={styles.unitsSystemIcon}
                     source= {unitsSystem ? require('../assets/ozIcon.png') : require('../assets/onOzIcon.png')}
                  />
               </Pressable>
               <Text style={styles.title}>{title}</Text>
               <Pressable style={styles.logoSystem} onPress={() => {
                  dispatch(unitsAction())
               }}>
                  <Image
                     style={styles.unitsSystemIcon}
                     source= {unitsSystem ? require('../assets/onCLIcon.png') : require('../assets/cLIcon.png')}
                  />
               </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
   upperMenu: {
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'row',
     heightMax: 120,
     backgroundColor: 'rgba(0,0,0,0.5)',
     borderRadius: 10
   },
   unitsSystemIcon: {
     height: 40,
     width: 40,
     marginTop: 20
   },
   title: {
     color: 'white',
     fontSize: 30,
     paddingTop: 30,
     fontWeight: 'bold',
     maxWidth: 240,
     textAlign: 'center'
   },
   logoSystem: {
     padding: 20
   },
})