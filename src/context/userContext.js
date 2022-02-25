import { createContext, useEffect, useState } from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../services/api';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setAuthenticated(true);
    console.log(json);
  }

  async function logIn(username, password) {
    const { url, options } = TOKEN_POST({
      username,
      password,
    });

    const response = await fetch(url, options);
    const { token } = await response.json();
    localStorage.setItem('@Dogs', token);
    getUser(token);
  }

  async function logOut() {
    localStorage.removeItem('@Dogs');
    setUserData(false);
    setError(null);
    setLoading(false);
    setAuthenticated(null);
  }

  useEffect(() => {
    async function automaticLogin() {
      const token = localStorage.getItem('@Dogs');
      try {
        if (token) {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    automaticLogin();
  }, []);

  return (
    <userContext.Provider
      value={{ userData, error, loading, logIn, logOut, authenticated }}>
      {children}
    </userContext.Provider>
  );
};
