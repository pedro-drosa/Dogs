import { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../services/api';

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

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
    window.localStorage.setItem('@Dogs', token);
    getUser(token);
  }

  return (
    <userContext.Provider value={{ logIn, userData, authenticated }}>
      {children}
    </userContext.Provider>
  );
};
