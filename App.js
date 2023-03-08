
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from 'expo-font';
import InfoScreen from './components/InfoScreen'
import Pokedex from './components/Pokedex'
import ListScreen from './components/ListScreen';

const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs()

export default function App() {
  const [loaded] = useFonts({
    GBfont: require('./assets/fonts/PokemonGb-RAeo.ttf'),
    GBjapanKT: require('./assets/fonts/PokemonGbJapanKt-8Rw2.ttf'),
    GBUnown: require('./assets/fonts/PokemonUnownGb-YAWa.ttf')
  })

  if(!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"
          component={Pokedex} />
        <Stack.Screen name="List"
          component={ListScreen} />
        <Stack.Screen name="Info"
          component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

