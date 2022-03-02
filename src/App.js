import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';
import Photo from './components/Photo';

import ProtectedRoute from './utils/ProtectedRoute';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  </div>
);

export default App;
