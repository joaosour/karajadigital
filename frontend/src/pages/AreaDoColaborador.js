import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Grid from "./../components/Grid.js";
import Form from "./../components/Form.js";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

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
        <div>
            <NavBar />
            <h3>Área do Colaborador</h3>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
            <Footer />
        </div>
    )
}