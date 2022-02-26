import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../services/api';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setAuthenticated(true);
  }

  async function logIn(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Usuário ou senha inválidos');
      const { token } = await response.json();
      localStorage.setItem('@Dogs', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }

  async function logOut() {
    localStorage.removeItem('@Dogs');
    setUserData(false);
    setError(null);
    setLoading(false);
    setAuthenticated(null);
    navigate('/login');
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
        } else {
          setAuthenticated(false);
        }
      } catch (err) {
        logOut();
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
