import NavBar from "../components/Navbar";
import styles from "./../styles/AreaDoColaborador.module.css"
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

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
                navigate("/area-do-colaborador");
            } else {
                alert("Login falhou. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar fazer login.");
        }
    };

    return (
        <div className={styles.body}>
            <NavBar />
            <div className={styles.ContainerArea}>
                <h3 className={styles.WelcomeText}>Bem vindo, colaborador!</h3>
                <h5 className={styles.InformationText}>Informe suas credenciais abaixo para acessar o painel administrativo</h5>
                <div className={styles.ContainerLogin}>
                    <h4>Usuário</h4>
                    <divInput className={styles.ContainerInput}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            className={styles.InputUser}
                            type="text" name="usuario"
                            placeholder="Insira seu usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </divInput>
                    <h4>Senha</h4>
                    <divInput className={styles.ContainerInput}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            className={styles.InputUser}
                            style={{ textTransform: "none" }}
                            type="password"
                            name="senha"
                            placeholder="Insira sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </divInput>
                    <button className={styles.ButtonLogin} onClick={handleLogin}>
                        <h3>ENTRAR</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}