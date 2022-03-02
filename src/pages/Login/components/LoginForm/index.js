import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../../../../context/userContext';
import useForm from '../../../../hooks/useForm';

import Head from '../../../../utils/Head';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';

import styles from './styles.module.css';
import stylesButton from '../../../../components/Button/styles.module.css';

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
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled type="submit">
            ...Carregando
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
        {error && <Error error={error} />}
      </form>

      <Link className={styles.lost} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subTitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link to="/login/criar" className={stylesButton.button}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
