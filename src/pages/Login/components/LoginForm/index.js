import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function hanleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={hanleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
      <Link to="criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
