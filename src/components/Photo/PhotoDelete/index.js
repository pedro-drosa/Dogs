import useFetch from '../../../hooks/useFetch';
import { PHOTO_DELETE } from '../../../services/api';

import Error from '../../Error';

import styles from './styles.module.css';

const PhotoDelete = ({ id }) => {
  const { request, error, loading } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const token = window.localStorage.getItem('@Dogs');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}

      <Error error={error} />
    </>
  );
};

export default PhotoDelete;
