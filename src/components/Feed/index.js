import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (fetchData) {
        const scroll = window.scrollY; // scroll position relative to the top of the screen
        const heigth = document.body.offsetHeight - window.innerHeight; // total value of the area available for scrolling

        // checks if the scroll is 75% away from the bottom of the page
        if (scroll > heigth * 0.75 && !wait) {
          setPages((state) => [...state, state.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [fetchData]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setFetchData={setFetchData}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
