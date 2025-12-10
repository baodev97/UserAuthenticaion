import AuthContent from "@/components/Auth/AuthContent";
import LoadingOverlay from "@/components/UI/LoadingOverlay";
import { createUser } from "@/util/auth";
import { useState } from "react";
import { Alert } from "react-native";

// export type SignupScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Signup"
// >;
export type Credential = {
  email: string;
  password: string;
};
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }: Credential) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Authentication failed!",
        "Could not create User, Please check credentials or try again later!"
      );
    }

    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Wating create User" />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
