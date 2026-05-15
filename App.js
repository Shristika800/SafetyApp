// built by Shristika Rai - May 2026

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

import OTP from './src/screens/OTP';

import Home from './src/screens/Home'
;
import SOS from './src/screens/SOS';
import Location from './src/screens/Location';
import Incident from './src/screens/Incident';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component = {Register} />
        <Stack.Screen name="Login" component = {Login} />

        <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SOS" component={SOS} />
    <Stack.Screen name="Location" component={Location} />
    <Stack.Screen name="Incident" component={Incident} />
      </Stack.Navigator>

      
    </NavigationContainer>
  ); 
}

