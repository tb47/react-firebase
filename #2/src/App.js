import './App.css';

import './firebase/init';

import { lazy, Suspense, createContext, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const Home = lazy(() => import('./components/home/home'));
const About = lazy(() => import('./components/about/about'));
const Login = lazy(() => import('./components/login/login'));
const Logout = lazy(() => import('./components/logout/logout'));
const User = lazy(() => import('./components/user/user'));
const Nomatch = lazy(() => import('./components/nomatch/nomatch'));

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{ user, setUser }}>
          <Header />
          <main>
            <Suspense fallback={<div id="app_fallback">Loading ...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="user" element={<User />} />
                <Route path="*" element={<Nomatch />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
