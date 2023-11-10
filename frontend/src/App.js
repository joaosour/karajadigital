// App.js
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  const [authData, setAuthData] = useState({ usuario: "JOAO", senha: "1234" });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes authData={authData} setAuthData={setAuthData} />}>
            <Route exact path='/' element={<Navbar />} />
            <Route path='/home'  element={<Home />} />
          </Route>
          <Route path='/login' element={<Login setAuthData={setAuthData} />}/>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;