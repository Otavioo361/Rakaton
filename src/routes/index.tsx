import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Admin from '../pages/Admin'; // Importe a nova tela

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
