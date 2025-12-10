import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};
type AuthContextinit = {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextinit>({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string | null) => {},
  logout: () => {},
});

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>(null);

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }
  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  useEffect(() => {
    async function getTokenFromStorage() {
      const storageToken = await AsyncStorage.getItem("token");
      if (storageToken) {
        setAuthToken(storageToken)
      }
    }
    getTokenFromStorage()
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
