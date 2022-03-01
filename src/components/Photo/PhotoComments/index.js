/* eslint-disable no-unused-vars */
import { useContext, useState, useRef, useEffect } from 'react';
import { userContext } from '../../../context/userContext';

import PhotoCommentsForm from '../PhotoCommentsForm';

import styles from './styles.module.css';

const PhotoComments = ({ id, comments }) => {
  const { authenticated } = useContext(userContext);
  const [allComments, setAllComments] = useState(() => comments);
  const commentsSection = useRef();

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [allComments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {allComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {authenticated && (
        <PhotoCommentsForm id={id} setAllComments={setAllComments} />
      )}
    </>
  );
};

export default PhotoComments;
