import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:8801/users"); 

      const isAuthenticated = response.data.some(
        (user) =>
          user.USUARIO === usuario &&
          user.SENHA === senha &&
          user.USUARIO_ADMIN === 1
      );

      if (isAuthenticated) {
        navigate("/home");
      } else {
        alert("Login falhou. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Usuário:
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
