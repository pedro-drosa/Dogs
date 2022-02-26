import { useContext } from 'react';
import { userContext } from '../../../../context/userContext';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import useFetch from '../../../../hooks/useFetch';
import Error from '../../../../components/Error';

import { USER_POST } from '../../../../services/api';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { logIn } = useContext(userContext);
  const { request, loading, error } = useFetch();

  async function handlesubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) logIn(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handlesubmit}>
        <Input label="Usuário" type="text" name="userName" {...username} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
