import useFetch from '../../../../hooks/useFetch';
import useForm from '../../../../hooks/useForm';

import Head from '../../../../utils/Head';

import { PASSWORD_LOST } from '../../../../services/api';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handlesubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${process.env.REACT_APP_URL}/login/resetar`,
      });

      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a Senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p className="success">{data}</p>
      ) : (
        <form onSubmit={handlesubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
