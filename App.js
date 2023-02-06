
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"
import InfoScreen from './components/InfoScreen'
import Pokedex from './components/Pokedex'

const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"
          component={Pokedex} />
          <Stack.Screen name="Info"
          component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

