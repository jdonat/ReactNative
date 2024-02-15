
import { StyleSheet, View } from 'react-native';
import GoalList from './components/GoalList';

export default function App() {



  return (
    <View style={styles.container}>
      <GoalList />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});