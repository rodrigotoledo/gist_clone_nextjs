"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useFlashMessage } from '@/contexts/FlashMessageContext'; // Importa o contexto de FlashMessage
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { showFlashMessage } = useFlashMessage(); // Usa o showFlashMessage no AuthProvider
  const [authToken, setAuthToken] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/', // Endereço do servidor GraphQL
        {
          query: `
            mutation {
              login(username: "${username}", password: "${password}") {
                token
                user {
                  id
                  username
                }
              }
            }
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { data } = response.data;

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }


      const { token } = data.login;
      setAuthToken(token);
      localStorage.setItem('token', token);
      showFlashMessage("Login successful!");
    } catch (error) {
      showFlashMessage("Login failed");
    }
  };

  const signUp = async (username, password) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/', // Endereço do servidor GraphQL
        {
          query: `
            mutation {
              createUser(username: "${username}", password: "${password}") {
                token
                user {
                  id
                  username
                }
              }
            }
          `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { data } = response.data;

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }


      const { token } = data.login;
      setAuthToken(token);
      localStorage.setItem('token', token);
      showFlashMessage("Account create with success!");
    } catch (error) {
      showFlashMessage("Error when creating account");
    }
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
    showFlashMessage("Logged out successfully"); // Mensagem ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, signUp }}>
      {isClient ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);