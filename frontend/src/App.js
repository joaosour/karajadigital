// App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import ListaBibliografica from './pages/ListaBibliografica';
import AcervoFotografico from './pages/AcervoFotografico';
import styles from './styles/global.module.css';
import AreaDoColaborador from './pages/AreaDoColaborador';
import { toast, ToastContainer } from 'react-toastify'
 
function App() {
  const [authData, setAuthData] = useState({ usuario:"JV", senha:"1" });

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
          <Route path='/area-do-colaborador' element={<AreaDoColaborador />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Navigate to='/home'/>} />
        </Routes>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </BrowserRouter>
    </div>
  );
}

export default App;