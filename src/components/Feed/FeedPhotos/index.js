import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../services/api';
import useFetch from '../../../hooks/useFetch';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../../Error';
import Loading from '../../Loading';

import styles from './styles.module.css';

const FeedPhotos = ({ user, page, setModalPhoto, setFetchData }) => {
  const { data: photos, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const totalItems = 3;
      const { url, options } = PHOTOS_GET({ page, total: 3, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < totalItems) {
        setFetchData(false);
      }
    }

    fetchPhotos();
  }, [request, user, setFetchData]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (photos)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );

  return null;
};

export default FeedPhotos;
