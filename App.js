import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from 'expo-font';
import PokedexScreen from './screens/PokedexScreen'
import ListScreen from './screens/ListScreen';
import InfoScreen from './screens/InfoScreen'

const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs()

export default function App() {
  const [loaded] = useFonts({
    GBfont: require('./assets/fonts/PokemonGb-RAeo.ttf'),
    GBjapanKT: require('./assets/fonts/PokemonGbJapanKt-8Rw2.ttf'),
    GBUnown: require('./assets/fonts/PokemonUnownGb-YAWa.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"
          component={PokedexScreen} />
        <Stack.Screen name="List"
          component={ListScreen} />
        <Stack.Screen name="Info"
          component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

