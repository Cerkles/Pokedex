import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen'
import InfoScreen from './components/InfoScreen'
import Pokedex from './components/Pokedex'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <InfoScreen />
      {/* <Pokedex /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
