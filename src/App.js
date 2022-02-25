import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

import Home from './pages/Home';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div>
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  </div>
);

export default App;
