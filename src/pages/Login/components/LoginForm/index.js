import { useState } from 'react';
import { Link } from 'react-router-dom';

import { TOKEN_POST } from '../../../../services/api';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const api = TOKEN_POST({ username: userName, password });

  function hanleSubmit(event) {
    event.preventDefault();
    console.log(api);

    // fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username: userName, password }),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={hanleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button type="submit">Entrar</Button>
      </form>
      <Link to="criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
