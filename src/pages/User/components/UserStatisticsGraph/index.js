/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

const UserStatisticsGraph = ({ data: photos }) => {
  const [graph, setGraph] = useState([]);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    setTotalViews(
      photos
        .map(({ acessos }) => +acessos)
        .reduce((acc, current) => acc + current, 0)
    );
  }, [photos]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.views}>
        <p>Acessos: {totalViews}</p>
      </div>
    </section>
  );
};

export default UserStatisticsGraph;
