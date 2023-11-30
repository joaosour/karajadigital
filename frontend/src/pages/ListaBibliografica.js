import NavBar from "../components/Navbar";
import styles from "../styles/ListaBibliografica.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { SiAdobeacrobatreader } from "react-icons/si";

export default function ListaBibliografica() {


    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const res = await axios.get("http://localhost:8801/books");
            setBooks(res.data.sort((a, b) => (a.autorsobrenome > b.autorsobrenome ? 1 : -1)));
        } catch (error) {
            console.log.error(error);
        }
    };

    useEffect(() => {
        getBooks();
    }, [setBooks]);

    return (
        <>
            <NavBar />
            <h3 style={{ marginBottom: "10px" }}>Lista Bibliográfica</h3>

            <div>

                {books.map((item, i) => (
                    <div className={styles.listContainer}>
                        <div className={styles.headerList}>
                            <p className={styles.autorArea}>{item.autorsobrenome}, {item.autornome}. {item.anopublicacao}</p>
                            <button className={styles.adobeIcon}>
                                <SiAdobeacrobatreader />
                            </button>
                        </div>
                        <p className={styles.descriptionArea}>{item.titulo} {item.complemento}</p>
                    </div>
                ))}
            </div>

        </>
    )
}