import React from "react";
import axios from "axios";
import styles from './GridBooks.module.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";



const GridBooks = ({ books, setBooks, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8801/books/" + id)
            .then(({ data }) => {
                const newArray = books.filter((user) => user.id !== id);

                setBooks(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    }

    return (
        <div className={styles.table}>
            <div className={styles.thread}>
                <div className={`${styles.tr} ${styles.trHeader}`}>
                    <div className={`${styles.th} ${styles['width-A']}`}>codlivro</div>
                    <div className={`${styles.th} ${styles['width-B']}`}>autorsobrenome</div>
                    <div className={`${styles.th} ${styles['width-C']}`}>autornome</div>
                    <div className={`${styles.th} ${styles['width-D']}`}>anopublicacao</div>
                    <div className={`${styles.th} ${styles['width-E']}`}>titulo</div>
                    <div className={`${styles.th} ${styles['width-F']}`}>complemento</div>
                    <div className={`${styles.th} ${styles['width-F']}`}>tipodepublicacao</div>
                    <div className={`${styles.th} ${styles['width-F']}`}>areadoconhecimento</div>
                    <div className={`${styles.th} ${styles['width-F']}`}>autornaoiny</div>
                    <div className={`${styles.th} ${styles['width-Z']}`}></div>
                    <div className={`${styles.th} ${styles['width-Z']}`}></div>
                </div>
            </div>
            <div className={styles.tbody}>
                {books.map((item, i) => (
                    <div key={i} className={styles.tr}>
                        <div className={`${styles.td} ${styles['width-A']}`}>{item.codlivro}</div>
                        <div className={`${styles.td} ${styles['width-B']}`}>{item.autorsobrenome}</div>
                        <div className={`${styles.td} ${styles['width-C']}`}>{item.autornome}</div>
                        <div className={`${styles.td} ${styles['width-D']}`}>{item.anopublicacao}</div>
                        <div className={`${styles.td} ${styles['width-E']}`}>{item.titulo}</div>
                        <div className={`${styles.td} ${styles['width-F']}`}>{item.complemento}</div>
                        <div className={`${styles.td} ${styles['width-F']}`}>{item.tipodepublicacao}</div>
                        <div className={`${styles.td} ${styles['width-F']}`}>{item.areadoconhecimento}</div>
                        <div className={`${styles.td} ${styles['width-F']}`}>{item.autornaoiny}</div>
                        
                        <div className={`${styles.td} ${styles['width-Z']}`}>
                            <FaEdit onClick={() => handleEdit(item)} />
                        </div>
                        <div className={`${styles.td} ${styles['width-Z']}`}>
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridBooks;