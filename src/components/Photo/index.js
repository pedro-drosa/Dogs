import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../services/api';

import Loading from '../Loading';
import Error from '../Error';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function loadPhoto() {
      const { url, options } = PHOTO_GET(id);
      await request(url, options);
    }

    loadPhoto();
  }, [request, id]);

  return (
    <>
      {loading && <Loading />}
      {data && (
        <section className="container mainContainer">
          <PhotoContent single data={data} />
        </section>
      )}
      <Error error={error} />
    </>
  );
};

export default Photo;
