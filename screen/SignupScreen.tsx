import AuthContent from "@/components/Auth/AuthContent";
import LoadingOverlay from "@/components/UI/LoadingOverlay";
import { createUser } from "@/util/auth";
import { useState } from "react";

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
    setIsAuthenticating(true)
    await createUser(email, password);
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message="Wating create User"/>
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
