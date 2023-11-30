import Footer from "../components/Footer.js";
import NavBar from "../components/Navbar.js";
import GridBooks from "../components/GridBooks.js";
import FormBooks from "../components/FormBooks.js";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import RegisterBar from "../components/RegisterBar.js";
import styles from './../styles/CadastrarLivro.module.css'

export default function CadastrarLivro() {

    const [books, setBooks] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
  
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8801/books");
        setBooks(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
    useEffect(() => {
      getBooks();
    }, [setBooks]);

    return (
        <div className={styles.body}>
            <NavBar />
            <RegisterBar />

            {/* <div className={styles.containerArea}>
              <h3>Bem vindo, colaborador!</h3>
              <h5>Este é o espaço destinado a manutenção dos dados cadastrados no site. Utilize a barra de navegação acima para acessar as opções de cadastro disponíveis.</h5>
            </div> */}
            <FormBooks onEdit={onEdit} setOnEdit={setOnEdit} getBooks={getBooks} />
            <GridBooks books={books} setBooks={setBooks} setOnEdit={setOnEdit}/>
            <Footer />
        </div>
    )
}