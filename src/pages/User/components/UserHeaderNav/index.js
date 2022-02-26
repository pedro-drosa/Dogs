import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { userContext } from '../../../../context/userContext';
import useMedia from '../../../../hooks/useMedia';

import { ReactComponent as FeedSvg } from '../../../../assets/feed.svg';
import { ReactComponent as AddSvg } from '../../../../assets/adicionar.svg';
import { ReactComponent as StatisticsSvg } from '../../../../assets/estatisticas.svg';
import { ReactComponent as GoOutSvg } from '../../../../assets/sair.svg';

import styles from './styles.module.css';

const UserHeaderNav = () => {
  const { logOut } = useContext(userContext);
  const { match: mobile } = useMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <nav
        className={`
          ${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }
        `}>
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
    </>
  );
};

export default UserHeaderNav;
