import { useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import { STATS_GET } from '../../../../services/api';

import Head from '../../../../utils/Head';

import Loading from '../../../../components/Loading';
import Error from '../../../../components/Error';
import UserStatisticsGraph from '../UserStatisticsGraph';

const Statistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getStats() {
      const token = window.localStorage.getItem('@Dogs');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }

    getStats();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatisticsGraph data={data} />
      </div>
    );
  }
  return null;
};

export default Statistics;
