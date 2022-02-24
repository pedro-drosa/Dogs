import { Link } from 'react-router-dom';

import useForm from '../../../../hooks/useForm';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />

        <Button type="submit">Entrar</Button>
      </form>
      <Link to="criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
