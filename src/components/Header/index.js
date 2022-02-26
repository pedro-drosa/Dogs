import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { userContext } from '../../context/userContext';

import { ReactComponent as DogsSvg } from '../../assets/dogs.svg';

import styles from './styles.module.css';

const Header = () => {
  const { userData } = useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <DogsSvg />
        </Link>
        {userData ? (
          <Link className={styles.login} to="conta">
            {userData.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="login">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
