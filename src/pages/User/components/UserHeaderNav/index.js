import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { userContext } from '../../../../context/userContext';

import { ReactComponent as FeedSvg } from '../../../../assets/feed.svg';
import { ReactComponent as AddSvg } from '../../../../assets/adicionar.svg';
import { ReactComponent as StatisticsSvg } from '../../../../assets/estatisticas.svg';
import { ReactComponent as GoOutSvg } from '../../../../assets/sair.svg';

import styles from './styles.module.css';

const UserHeaderNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [mobile, setMobile] = useState(null);
  const { logOut } = useContext(userContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="" end>
        <FeedSvg />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <StatisticsSvg />
        {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AddSvg />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={logOut}>
        <GoOutSvg />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
