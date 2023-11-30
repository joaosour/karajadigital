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
import LoginFormModal from './pages/LoginFormModal';
import Testes from './pages/Testes';
import CadastrarUsuario from './pages/CadastrarUsuario';
import CadastrarLivro from './pages/CadastrarLivro';
 
function App() {
  const [authData, setAuthData] = useState({ usuario:"JV", senha:"JV" });

  return (
    <div className={styles.body}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes authData={authData} setAuthData={setAuthData} />}>
            <Route path='/acervo-fotografico' element={<AcervoFotografico />}/>
          </Route>
          <Route path='/home'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/login' element={<Login /*setAuthData={setAuthData}*/ />}/>
          <Route path='/lista-bibliografica' element={<ListaBibliografica />}/>
          <Route path='/area-do-colaborador' element={<AreaDoColaborador />}/>
          <Route path='/area-do-colaborador/cadastrar-usuario' element={<CadastrarUsuario />}/>
          <Route path='/area-do-colaborador/cadastrar-livro' element={<CadastrarLivro />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/testes' element={<Testes />}/>
          <Route path='*' element={<Navigate to='/home'/>} />
        </Routes>
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
      </BrowserRouter>
    </div>
  );
}

export default App;