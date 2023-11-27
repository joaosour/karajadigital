import React from "react";
import axios from "axios";
import styles from './Grid.module.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";



const Grid = ({ users, setUsers, setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8801/users/" + id)
        .then (({ data }) => {
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
            <div className={styles.tr}>
              <div className={styles.th}>Nome</div>
              <div className={styles.th}>Usuário</div>
              <div className={styles.th}>Email</div>
              <div className={styles.th}>Senha</div>
              <div className={styles.th}>Admin</div>
              <div className={styles.th}>Data de cadastro</div>
              <div className={styles.th}></div>
              <div className={styles.th}></div>
            </div>
          </div>
          <div className={styles.tbody}>
            {users.map((item, i) => (
              <div key={i} className={styles.tr}>
                <div className={`${styles.td} ${styles['width-20']}`}>{item.nome}</div>
                <div className={`${styles.td} ${styles['width-10']}`}>{item.usuario}</div>
                <div className={`${styles.td} ${styles['width-25']}`}>{item.email}</div>
                <div className={`${styles.td} ${styles['width-15']}`}>{item.senha}</div>
                <div className={`${styles.td} ${styles['width-5']}`}>{item.usuario_admin}</div>
                <div className={`${styles.td} ${styles['width-15']}`}>{item.dtcadastro}</div>
                <div className={`${styles.td} ${styles['width-5']}`}>
                  <FaEdit onClick={() => handleEdit(item)} />
                </div>
                <div className={`${styles.td} ${styles['width-5']}`}>
                  <FaTrash onClick={() => handleDelete(item.id)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Grid;