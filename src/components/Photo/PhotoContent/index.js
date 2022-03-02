import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../context/userContext';

import PhotoComments from '../PhotoComments';
import PhotoDelete from '../PhotoDelete';
import Image from '../../Image';

import styles from './styles.module.css';

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;

  const { userData } = useContext(userContext);

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {userData && userData.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso}Kg</li>
            <li>
              {photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments single id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
