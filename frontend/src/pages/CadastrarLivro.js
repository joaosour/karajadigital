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
import FormModal from "../components/FormModal.js";

export default function CadastrarLivro() {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



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
            <h3 style={{marginBottom: '20px', textAlign: 'end'}}>Cadastrar livro</h3>

            {/* <button onClick={handleOpenModal}>Abrir Modal</button> */}
            {/* <FormModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}

            <FormBooks onEdit={onEdit} setOnEdit={setOnEdit} getBooks={getBooks} />
            <h3 style={{marginTop: '20px', textAlign: 'end'}}>Livros cadastrados</h3>
            <GridBooks books={books} setBooks={setBooks} setOnEdit={setOnEdit}/>
            <Footer />
        </div>
    )
}