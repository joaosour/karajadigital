import NavBar from "../components/Navbar";
import styles from "./../styles/Login.module.css"
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'
import Footer from "../components/Footer";

export default function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get("http://localhost:8801/users");

            const isAuthenticated = response.data.some(
                (user) =>
                    user.usuario === usuario &&
                    user.senha === senha &&
                    user.usuario_admin === 1
            );

            if (isAuthenticated) {
                navigate("/area-do-colaborador");
            } else {
                toast.error("Credenciais inválidas.");
                console.log(response.data)
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar fazer login.");
        }
    };

    return (
        <div >
            <NavBar />
            <div className={styles.bodyContainer}>
                <div className={styles.ContainerArea}>
                    <h3 className={styles.WelcomeText}>Bem vindo, colaborador!</h3>
                    <h5 className={styles.InformationText}>Informe suas credenciais abaixo para acessar o painel administrativo</h5>
                    <div className={styles.ContainerLogin}>
                        <h4>Usuário</h4>
                        <div className={styles.ContainerInput}>
                            <FaUser className={styles.inputIcon} />
                            <input
                                className={styles.InputLogin}
                                type="text" name="usuario"
                                placeholder="Insira seu usuário"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <h4>Senha</h4>
                        <div className={styles.ContainerInput}>
                            <FaLock className={styles.inputIcon} />
                            <input
                                className={styles.InputLogin}
                                style={{ textTransform: "none" }}
                                type="password"
                                name="senha"
                                placeholder="Insira sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        {/* <button className={styles.ButtonLogin} onClick={handleLogin}> */}
                        <button className={styles.ButtonLogin} onClick={() => navigate("/area-do-colaborador")}>
                            <h3>ENTRAR</h3>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}