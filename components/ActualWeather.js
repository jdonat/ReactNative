import { Image, Text, StyleSheet, View } from 'react-native';

export default function ActualWeather({name, img, temp, description}) {

   return(
   <View style={styles.actualWeatherView}>
      <Text style={styles.place}>{name}</Text>
      <View style={styles.middle}>
         <Image
            style={styles.tinyLogo}
            source={{
               uri: img,
            }}
         />
         <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
   actualWeatherView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    borderColor: 'aquamarine',
    maxWidth: 350,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
   place: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  tinyLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120
  },
  temp: {
    fontSize: 40
  },
  description: {
    fontSize: 26
  }

});