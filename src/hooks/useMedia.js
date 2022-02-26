import { useEffect, useState } from 'react';

const useMedia = (mediaQuery) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(mediaQuery);
      setMatch(matches);
    }

    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [mediaQuery]);

  return { match };
};

export default useMedia;
