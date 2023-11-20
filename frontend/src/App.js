// App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
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
          <Route element={<PrivateRoutes authData={authData} setAuthData={setAuthData} />}>
            <Route path='/acervo-fotografico' element={<AcervoFotografico />}/>
          </Route>
          <Route path='/home'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/login' element={<Login setAuthData={setAuthData} />}/>
          <Route path='/lista-bibliografica' element={<ListaBibliografica />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Navigate to='/home'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;