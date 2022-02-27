import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import useFetch from '../../../../hooks/useFetch';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';

import { PHOTO_POST } from '../../../../services/api';

import styles from './styles.module.css';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');

  const [img, setImg] = useState({});

  const { data, request, loading, error } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    const token = window.localStorage.getItem('@Dogs');

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const { url, options } = PHOTO_POST(formData, token);

    await request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Peso" type="number" name="peso" {...weight} />
        <Input label="Idade" type="number" name="idade" {...age} />
        <input
          className={styles.file}
          id="img"
          type="file"
          name="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ background: `url(${img.preview})` }}
          />
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
