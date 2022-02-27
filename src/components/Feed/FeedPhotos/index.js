/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../services/api';
import useFetch from '../../../hooks/useFetch';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../../Error';
import Loading from '../../Loading';

import styles from './styles.module.css';

const FeedPhotos = () => {
  const { data: photos, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (photos)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );

  return null;
};

export default FeedPhotos;
