import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { COMMENT_POST } from '../../../services/api';

import Error from '../../Error';

import { ReactComponent as SendSvg } from '../../../assets/enviar.svg';

import styles from './styles.module.css';

const PhotoCommentsForm = ({ id, setAllComments, single }) => {
  const [comment, setComment] = useState('');

  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('@Dogs');
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setAllComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}>
      <textarea
        className={styles.textArea}
        id="comment"
        name="comment"
        value={comment}
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <SendSvg />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
