// import styles from './styles.module.css';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './components/UserHeader';
import UserPhotoPost from './components/UserPhotoPost';
import UserStatistics from './components/UserStatistics';
import Feed from '../../components/Feed';

const User = () => (
  <section className="container">
    <UserHeader />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="postar" element={<UserPhotoPost />} />
      <Route path="estatisticas" element={<UserStatistics />} />
    </Routes>
  </section>
);

export default User;
