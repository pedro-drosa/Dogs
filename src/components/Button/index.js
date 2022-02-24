import styles from './styles.module.css';

const Button = ({ children, ...props }) => (
  <button {...props} className={styles.button} type="button">
    {children}
  </button>
);

export default Button;
