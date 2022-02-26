import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import UserHeaderNav from '../UserHeaderNav';

const UserHeader = () => {
  const params = useParams();
  return (
    <header className={styles.header}>
      <h1 className="title">{params['*'] === '' ? 'Conta' : params['*']}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
