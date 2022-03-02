import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import UserHeader from './components/UserHeader';
import UserPhotoPost from './components/UserPhotoPost';
import UserStatistics from './components/UserStatistics';
import Feed from '../../components/Feed';

const User = () => {
  const { userData } = useContext(userContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={userData.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatistics />} />
      </Routes>
    </section>
  );
};

export default User;
