import { ActivityIndicator, ImageBackground, SafeAreaView, FlatList, Text, StyleSheet, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import WeatherForecastItem from './components/WeatherForecastItem'
import ActualWeather from './components/ActualWeather'

export default function App() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [weatherForecastData, setWeatherForecastData] = useState(null)
  const [dates, setDates] = useState(null)

  const API_key = "917a15b5026fa7b122f56a0c40cd1bc9"
  const lat = location?.coords.latitude
  const lon = location?.coords.longitude
  const lang = 'fr'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=${lang}&units=metric`
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&lang=${lang}&units=metric`


  useEffect(() => {
    if(location != null)
    {
      fetchData()
      fetchForecastData()
    }
  },[location])

    useEffect(() => {
    if(weatherForecastData != null)
    {
      let datz = []
      for(let i =0; i < weatherForecastData.list.length; i++)
      {
        let tmp = Math.round(weatherForecastData.list[i].main.temp)
        datz[i] = {id: i, 
          title: weatherForecastData.list[i].dt_txt, 
          img: `https://openweathermap.org/img/wn/${weatherForecastData.list[i].weather[0].icon}@2x.png`, 
          temp: tmp,
          desc: weatherForecastData.list[i].weather[0].description
        }
      }
      setDates(datz)
    }
  },[weatherForecastData])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let text
      if (errorMsg) {
        text = errorMsg;
        console.log(text)
      } else if (location) {}
    })();
  }, []);

  async function fetchData() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    setWeatherData(data)
  } catch (error) {
    console.error(error)
  }
}

  async function fetchForecastData() {
  try {
    const response = await fetch(urlForecast)
    const data = await response.json()
    setWeatherForecastData(data)
  } catch (error) {
    console.error(error)
  }
}

  if((weatherData != null)&&(weatherForecastData != null))
  {
    let temp = Math.round(weatherData.main.temp)
    let imageUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/pexels-benjamin-suter-3617500.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Météo</Text>
        <ActualWeather name={weatherData.name} img={imageUrl} temp={temp} description={weatherData.weather[0].description}/>
        <View><Text style={styles.forecastTitle}>Prévisions</Text></View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <FlatList
            data={dates}
            renderItem={({item}) => <WeatherForecastItem title={item.title} img={item.img} temp={item.temp} desc={item.desc}/>}
            keyExtractor={item => item.id}
            horizontal='true'
          />
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
    );
  }
  else
  {
    return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  tinyForecastImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  forecastTitle: {
    fontSize: 26,
    padding: 10,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});