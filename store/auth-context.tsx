import { createContext, ReactNode, useState } from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};
type AuthContextinit = {
  token: string|null
  isAuthenticated: boolean
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
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
