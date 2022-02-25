import { Link } from 'react-router-dom';

import useForm from '../../../../hooks/useForm';
import { TOKEN_POST } from '../../../../services/api';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { url, options } = TOKEN_POST({
    username: username.value,
    password: password.value,
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('@Dogs', json.token);
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
