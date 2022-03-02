import styles from './styles.module.css';

import { ReactComponent as FooterSvg } from '../../assets/dogs-footer.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <FooterSvg />
    <p>Dogs. Alguns direitos reservados.</p>
  </footer>
);

export default Footer;
