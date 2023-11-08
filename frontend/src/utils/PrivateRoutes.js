import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PrivateRoutes() {
  const auth = {
    usuario: "JOAO",
    senha: "1234",
  };

  const [isAuthenticated, setIsAuthenticated] = useState(null); // Defina como nulo inicialmente

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:8801/users");
        // console.log('Resposta da API', response.data);

        const isAdmin = response.data.some(
          (user) =>
            user.USUARIO === auth.usuario &&
            user.SENHA === auth.senha &&
            user.USUARIO_ADMIN === 1
        );
        setIsAuthenticated(isAdmin);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, [auth.usuario, auth.senha]);

  console.log(isAuthenticated)
  if (isAuthenticated === null) {
    return console.log('Verificando autenticação...')
  } else if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
