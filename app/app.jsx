// Example using React Navigation Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import RegisterScreen from './register';
import LoginScreen from './login';
import OnboardingScreen from './onboarding_screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
}