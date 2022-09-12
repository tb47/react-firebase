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
const UserSetup = lazy(() => import('./components/user/components/setup/setup'))
const UserProfil = lazy(() => import('./components/user/components/profil/profil'))
const UserStatistics = lazy(() => import('./components/user/components/statistics/statistics'))
const Shop = lazy(() => import('./components/shop/shop'));
const Products = lazy(() => import('./components/shop/components/products/products'));
const Shoppingcard = lazy(() => import('./components/shop/components/shoppingcard/shoppingcard'));
const Legalnotice = lazy(() => import('./components/legalnotice/legalnotice'));
const Nomatch = lazy(() => import('./components/nomatch/nomatch'));

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [shopuser, setShopuser] = useState();
  const [amounttopay, setAmounttopay] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={{ user, setUser, shopuser, setShopuser, amounttopay, setAmounttopay }}>
          <Header />
          <main>
            <Suspense fallback={<div id="app_fallback">Loading ...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="user" element={<User />} >
                  <Route path="setup" element={<UserSetup />} />
                  <Route path="profil" element={<UserProfil />} />
                  <Route path="statistics" element={<UserStatistics />} />
                </Route>
                <Route path="shop" element={<Shop />} >
                  <Route path="products" element={<Products />} />
                  <Route path="shoppingcard" element={<Shoppingcard />} />
                </Route>
                <Route path="legalnotice" element={<Legalnotice />} />
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
