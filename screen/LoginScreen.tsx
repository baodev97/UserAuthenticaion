import LoadingOverlay from '@/components/UI/LoadingOverlay';
import { login } from '@/util/auth';
import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';

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
    setIsAuthenticating(true)
    await login(email, password);
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message="Wating create User"/>
  }
  return <AuthContent isLogin onAuthenticate={signupHandler}/>;
}

export default LoginScreen;