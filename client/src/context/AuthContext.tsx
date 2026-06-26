import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  User,
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

import {
  loginUser,
  registerUser,
} from "../services/authApi";

import { socket } from "../services/socket";

type AuthContextType = {
  user: User | null;
  loading: boolean;

  login: (
    data: LoginRequest
  ) => Promise<void>;

  register: (
    data: RegisterRequest
  ) => Promise<void>;

  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }

    setLoading(false);
  }, []);

  const login = async (
    data: LoginRequest
  ) => {
    const response =
      await loginUser(data);

    if (!response.success)
      return;

    localStorage.setItem(
      "token",
      response.token!
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.user
      )
    );

    setUser(response.user);

    if (!socket.connected) {
      socket.connect();
    }
  };

  const register = async (
    data: RegisterRequest
  ) => {
    await registerUser(data);
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setUser(null);

    if (socket.connected) {
      socket.disconnect();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};