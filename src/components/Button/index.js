import styles from './styles.module.css';

const Button = ({ children, type, ...props }) => (
  <button {...props} className={styles.button} type={type}>
    {children}
  </button>
);

export default Button;
