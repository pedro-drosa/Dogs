import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';

import Header from './components/Header';
import Footer from './components/Footer';

import ProtectedRoute from './utils/ProtectedRoute';

const App = () => (
  <div>
    <BrowserRouter>
      <UserContextProvider>
        <Header />
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
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  </div>
);

export default App;
