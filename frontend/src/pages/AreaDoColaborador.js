import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Grid from "../components/GridUsers.js";
import Form from "../components/FormUsers.js";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import RegisterBar from "../components/RegisterBar.js";
import styles from './../styles/AreaDoColaborador.module.css'

export default function AreaDoColaborador() {

    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8801/users");
        setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getUsers();
    }, [setUsers]);

    return (
        <div className={styles.body}>
            <NavBar />
            <RegisterBar />

            <div className={styles.containerArea}>
              <h3>Bem vindo, colaborador!</h3>
              <h5>Este é o espaço destinado a manutenção dos dados cadastrados no site. Utilize a barra de navegação acima para acessar as opções de cadastro disponíveis.</h5>
            </div>
            {/* <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/> */}
            <Footer />
        </div>
    )
}