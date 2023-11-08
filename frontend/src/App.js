import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={<Navbar />} />
            <Route path='/home'  element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
