import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../../../hooks/useForm';
import useFetch from '../../../../hooks/useFetch';

import Head from '../../../../utils/Head';

import { PASSWORD_RESET } from '../../../../services/api';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';

const LoginPasswordReset = () => {
  const [key, setKey] = useState();
  const [login, setLogin] = useState();
  const password = useForm();
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get('key');
    const loginParam = params.get('login');

    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar Senha</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
