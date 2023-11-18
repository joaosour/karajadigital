// App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import ListaBibliografica from './pages/ListaBibliografica';
import AcervoFotografico from './pages/AcervoFotografico';
import styles from './styles/global.module.css';

function App() {
  const [authData, setAuthData] = useState({ usuario: "JOAO", senha: "1234" });

  return (
    <div className={styles.body}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route element={<PrivateRoutes authData={authData} setAuthData={setAuthData} />}>
          </Route>
          <Route path='/home'  element={<Home />} />
          <Route path='/login' element={<Login setAuthData={setAuthData} />}/>
          <Route path='/lista-bibliografica' element={<ListaBibliografica />}/>
          <Route path='/acervo-fotografico' element={<AcervoFotografico />}/>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;