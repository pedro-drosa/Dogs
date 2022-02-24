import styles from './styles.module.css';

const Input = ({ label, type, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input id={name} className={styles.input} type={type} />
  </div>
);

export default Input;
