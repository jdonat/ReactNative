import { Image, Text, StyleSheet, View } from 'react-native';
    
function getFullDate(dat)
{
  let date = new Date(dat)
  let day = date.getDay()
  let dayString = ''
  let dayNumber = date.getDate().toString()
  let month = date.getMonth()
  let monthString = ''
  let hourString = date.getHours().toString()+'H'

  switch(day)
  {
     case 0: dayString='Dim'
     break
     case 1: dayString='Lun'
     break
     case 2: dayString='Mar'
     break
     case 3: dayString='Mer'
     break
     case 4: dayString='Jeu'
     break
     case 5: dayString='Ven'
     break
     case 6: dayString='Sam'
     break
     default: dayString='error'
     break
  }
  switch(month)
  {
     case 0: monthString= 'Jan'
     break
     case 1: monthString= 'Fev'
     break
     case 2: monthString= 'Mar'
     break
     case 3: monthString= 'Avr'
     break
     case 4: monthString= 'Mai'
     break
     case 5: monthString= 'Juin'
     break
     case 6: monthString= 'Juil'
     break
     case 7: monthString= 'Aout'
     break
     case 8: monthString= 'Sept'
     break
     case 9: monthString= 'Oct'
     break
     case 10: monthString= 'Nov'
     break
     case 11: monthString= 'Dec'
     break
     default: monthString='error'
     break
  }
  return dayString+' '+dayNumber+' '+monthString+' '+hourString
}

export default function WeatherForecastItem({title, img, temp, desc}) {

  let date = getFullDate(title)
  return(
<View style={styles.item}>
  <View style={styles.firstLine}>
     <Text style={styles.date}>{date}</Text>
     <Image
        style={styles.tinyLogoForecast}
        source= {{uri: img}}
     />
     <Text style={styles.temp}>{temp}°C</Text>
  </View>
  <View style={styles.desc}>
     <Text style={styles.descText}>{desc}</Text>
  </View>
</View>

)
}


const styles = StyleSheet.create({
item: {
width: 300,
borderWidth: 2,
borderRadius: 10,
borderColor: 'aquamarine',
padding: 10,
marginVertical: 8,
marginHorizontal: 16,
color: 'black',
backgroundColor: 'rgba(255,255,255,0.7)'
},
firstLine: {
justifyContent: 'space-around',
alignItems: 'center',
flexDirection: 'row'
},
date: {
fontSize: 18,
fontWeight: 'bold',
width: 120
},
tinyLogoForecast: {
height: 50,
width: 50,
borderColor: 'aquamarine',
borderWidth: 1,
borderRadius: 20,
backgroundColor: 'rgba(127,127,127,0.2)'
},
desc: {
justifyContent: 'center',
alignItems: 'center',
},
temp: {
fontSize: 20,
width: 60
},
descText: {
fontSize: 20
}

});