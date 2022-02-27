import styles from './styles.module.css';

const FeedPhotosItem = ({ photo }) => (
  <li className={styles.photo}>
    <img src={photo.src} alt={photo.title} />
    <span className={styles.views}>{photo.acessos}</span>
  </li>
);

export default FeedPhotosItem;
