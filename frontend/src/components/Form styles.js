import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import styles from './Form.module.css'

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.usuario.value = onEdit.usuario;
            user.email.value = onEdit.email;
            user.senha.value = onEdit.senha;
            user.usuario_admin.value = onEdit.usuario_admin;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if(
        !user.nome.value ||
        !user.usuario.value ||
        !user.email.value ||
        !user.senha.value ||
        !user.usuario_admin.value

    ) {
        return toast.warn("Preencha todos os campos!");
    }

    if(onEdit) {
        await axios
        .put("http://localhost:8801/users/" + onEdit.id, {
            nome: user.nome.value,
            usuario: user.usuario.value,
            email: user.email.value,
            senha: user.senha.value,
            usuario_admin: user.usuario_admin.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }else{
        await axios
        .post("http://localhost:8801/users/", {
            nome: user.nome.value,
            usuario: user.usuario.value,
            email: user.email.value,
            senha: user.senha.value,
            usuario_admin: user.usuario_admin.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.usuario.value = "";
    user.email.value = "";
    user.senha.value = "";
    user.usuario_admin.value = "";
    
    setOnEdit(null);
    getUsers();
    };

    return(
        <div className={styles.FormContainer} ref={ref} onSubmit={handleSubmit}>
            <div className={styles.InputContainer}>
                <label className={styles.LabelInput}>Nome</label>
                <input className={styles.InputText} name="nome" ref={ref}/>
            </div>
            <div className={styles.InputContainer}>
                <label>Usuário</label>
                <input className={styles.input} name="usuario" type="usuario" ref={ref}/>
            </div>
            <div className={styles.div}>
                <label>E-mail</label>
                <input className={styles.input} name="email" type="email" ref={ref}/>
            </div>
            <div className={styles.div}>
                <label>Senha</label>
                <input className={styles.input} name="senha" ref={ref}/>
            </div>
            <div className={styles.div}>
                <label>Admin</label>
                <input className={styles.input} name="usuario_admin" ref={ref}/>
            </div>
            <div className={styles.div}>
                <button type="submit">SALVAR</button>
            </div>
        </div>
    );
};

export default Form;