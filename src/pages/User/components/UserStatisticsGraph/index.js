import { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

import styles from './styles.module.css';

const UserStatisticsGraph = ({ data: photos }) => {
  const [graph, setGraph] = useState([]);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    setGraph(
      photos.map((photo) => ({
        x: photo.title,
        y: +photo.acessos,
      }))
    );

    setTotalViews(
      photos
        .map(({ acessos }) => +acessos)
        .reduce((acc, current) => acc + current, 0)
    );
  }, [photos]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.views} ${styles.item}`}>
        <p>Acessos: {totalViews}</p>
      </div>
      <div className={styles.item}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.item}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatisticsGraph;
