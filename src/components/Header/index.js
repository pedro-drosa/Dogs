import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className="container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="login">Login/Criar</NavLink>
    </nav>
  </header>
);

export default Header;
