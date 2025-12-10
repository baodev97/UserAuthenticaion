import AuthContent from "@/components/Auth/AuthContent";
import LoadingOverlay from "@/components/UI/LoadingOverlay";
import { AuthContext } from "@/store/auth-context";
import { createUser } from "@/util/auth";
import { useContext, useState } from "react";
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
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }: Credential) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Authentication failed!",
        "Could not create User, Please check credentials or try again later!"
      );

      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Wating create User" />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
