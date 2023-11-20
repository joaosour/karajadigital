// PrivateRoutes.js
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

export default function PrivateRoutes({ authData }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:8801/users"); 
        const { usuario, senha } = authData;

        const isAuthenticated = response.data.some(
          (user) =>
            user.USUARIO === usuario &&
            user.SENHA === senha &&
            user.USUARIO_ADMIN === 1
        );

        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, [authData.usuario, authData.senha]);

  if (isAuthenticated === null) {
    return <p>Verificando autenticação...</p>;
  } else if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/home" />;
  }
}
