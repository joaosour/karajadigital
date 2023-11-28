import React from "react";
import axios from "axios";
import styles from './Grid.module.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";



const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8801/users/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    }

    return (
        <div className={styles.table}>
            <div className={styles.thread}>
                <div className={`${styles.tr} ${styles.trHeader}`}>
                    <div className={`${styles.th} ${styles['width-A']}`}>Nome</div>
                    <div className={`${styles.th} ${styles['width-B']}`}>Usuário</div>
                    <div className={`${styles.th} ${styles['width-C']}`}>Email</div>
                    <div className={`${styles.th} ${styles['width-D']}`}>Senha</div>
                    <div className={`${styles.th} ${styles['width-E']}`}>Admin</div>
                    <div className={`${styles.th} ${styles['width-F']}`}>Data de cadastro</div>
                    <div className={`${styles.th} ${styles['width-Z']}`}></div>
                    <div className={`${styles.th} ${styles['width-Z']}`}></div>
                </div>
            </div>
            <div className={styles.tbody}>
                {users.map((item, i) => (
                    <div key={i} className={styles.tr}>
                        <div className={`${styles.td} ${styles['width-A']}`}>{item.nome}</div>
                        <div className={`${styles.td} ${styles['width-B']}`}>{item.usuario}</div>
                        <div className={`${styles.td} ${styles['width-C']}`}>{item.email}</div>
                        <div className={`${styles.td} ${styles['width-D']}`}>{item.senha}</div>
                        <div className={`${styles.td} ${styles['width-E']}`}>{item.usuario_admin}</div>
                        <div className={`${styles.td} ${styles['width-F']}`}>{item.dtcadastro}</div>
                        
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

export default Grid;