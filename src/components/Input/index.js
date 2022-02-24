import styles from './styles.module.css';

const Input = ({ label, type, name }) => (
  <div className={styles.wrapper}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input id={name} className={styles.input} type={type} />
    <p className={styles.error}>Error</p>
  </div>
);

export default Input;
