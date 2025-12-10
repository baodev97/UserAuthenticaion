import { createContext, ReactNode } from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const value = {
    token: "",
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
