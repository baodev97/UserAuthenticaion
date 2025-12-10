import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { Colors } from "./constants/styles";
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import WelcomeScreen from "./screen/WelcomeScreen";
import AuthContextProvider from "./store/auth-context";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Navigation />
    </>
  );
}
