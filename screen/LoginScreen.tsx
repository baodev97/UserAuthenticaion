import LoadingOverlay from "@/components/UI/LoadingOverlay";
import { login } from "@/util/auth";
import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

// export type LoginScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Login"
// >;
export type Credential = {
  email: string;
  password: string;
};

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }: Credential) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Authentication failed!",
        "Could not log in, Please check credentials or try again later!"
      );
    }

    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Wating create User" />;
  }
  return <AuthContent isLogin onAuthenticate={signupHandler} />;
}

export default LoginScreen;
