import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../../../../context/userContext';

import useForm from '../../../../hooks/useForm';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { logIn, error, loading } = useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      logIn(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled type="submit">
            ...Carregando
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
