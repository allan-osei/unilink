// Example using React Navigation Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import RegisterScreen from './register';
import LoginScreen from './login';
import OnboardingScreen from './onboarding_screen';
import SettingsScreen from './settings'
import MapScreen from './map';

import InternshipScreen from './internship';
import NotificationsScreen from './notifications';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="InternshipScreen" component={InternshipScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      {/* <Stack.Screen name="MapScreen" component={MapScreen} /> */}

      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
}