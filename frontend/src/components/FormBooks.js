import styles from './FormBooks.module.css';
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const FormBooks = ({ getBooks, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const book = ref.current;

            book.codlivro.value = onEdit.codlivro;
            book.autorsobrenome.value = onEdit.autorsobrenome;
            book.autornome.value = onEdit.autornome;
            book.anopublicacao.value = onEdit.anopublicacao;
            book.titulo.value = onEdit.titulo;
            book.complemento.value = onEdit.complemento;
            book.tipodepublicacao.value = onEdit.tipodepublicacao;
            book.areadoconhecimento.value = onEdit.areadoconhecimento;
            book.autornaoiny.value = onEdit.autornaoiny;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const book = ref.current;

    if(
        !book.codlivro.value ||
        !book.autorsobrenome.value ||
        !book.autornome.value ||
        !book.anopublicacao.value ||
        !book.titulo.value ||
        !book.complemento.value ||
        !book.tipodepublicacao.value ||
        !book.areadoconhecimento.value ||
        !book.autornaoiny.value
    ) {
        return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
        await axios
          .put("http://localhost:8801/books/" + onEdit.id, {
            codlivro: book.codlivro.value,
            autorsobrenome: book.autorsobrenome.value,
            autornome: book.autornome.value,
            anopublicacao: book.anopublicacao.value,
            titulo: book.titulo.value,
            complemento: book.complemento.value,
            tipodepublicacao: book.tipodepublicacao.value,
            areadoconhecimento: book.areadoconhecimento.value,
            autornaoiny: book.autornaoiny.value,

          })
          .then(({ data }) => toast.success(data))
          .catch((error) => {
            if (error.response.status === 409) {
              toast.error(error.response.data);
            } else {
              console.error(error);
            }
          });
      } else {
        await axios
          .post("http://localhost:8801/books/", {
            codlivro: book.codlivro.value,
            autorsobrenome: book.autorsobrenome.value,
            autornome: book.autornome.value,
            anopublicacao: book.anopublicacao.value,
            titulo: book.titulo.value,
            complemento: book.complemento.value,
            tipodepublicacao: book.tipodepublicacao.value,
            areadoconhecimento: book.areadoconhecimento.value,
            autornaoiny: book.autornaoiny.value,
          })
          .then(({ data }) => toast.success(data))
          .catch((error) => {
            if (error.response.status === 409) {
              toast.error(error.response.data);
            } else {
              console.error(error);
            }
          });
      }
      

    book.codlivro.value = "";
    book.autorsobrenome.value = "";
    book.autornome.value = "";
    book.anopublicacao.value = "";
    book.titulo.value = "";
    book.complemento.value = "";
    book.tipodepublicacao.value = "";
    book.areadoconhecimento.value = "";
    book.autornaoiny.value = "";
    
    setOnEdit(null);
    getBooks();
    };

    return (
        <form className={styles.formContainer} ref={ref} onSubmit={handleSubmit}>
            <div className={styles.inputArea} style={{width: '10%', flex: 1}}>
                <label className={styles.label} htmlFor="codlivro">Cód. Livro</label>
                <input className={styles.input} name="codlivro" id="codlivro"/>
            </div>
            <div className={styles.inputArea} style={{width: '17%'}}>
                <label className={styles.label} htmlFor="tipodepublicacao">Tipo de publicação</label>
                <input className={styles.input} name="tipodepublicacao" id="tipodepublicacao"/>
            </div>
            <div className={styles.inputArea} style={{width: '15%'}}>
                <label className={styles.label} htmlFor="autorsobrenome">Sobrenome autor</label>
                <input className={styles.input} name="autorsobrenome" id="autorsobrenome"/>
            </div>
            <div className={styles.inputArea} style={{width: '20%'}}>
                <label className={styles.label} htmlFor="autornome">Nome autor</label>
                <input className={styles.input} name="autornome" id="autornome"/>
            </div>
            <div className={styles.inputArea} style={{width: '17%'}}>
                <label className={styles.label} htmlFor="anopublicacao">Ano de publicação</label>
                <input className={styles.input} name="anopublicacao" id="anopublicacao"/>
            </div>
            <div className={styles.inputArea} style={{width: '100%', wordWrap: 'break-word'}}>
                <label className={styles.label} htmlFor="titulo">Título</label>
                <input className={styles.input} name="titulo" id="titulo"/>
            </div>
            <div className={styles.inputArea} style={{width: '11%', flex: 1}}>
                <label className={styles.label} htmlFor="complemento">Complemento</label>
                <input className={styles.input} name="complemento" id="complemento"/>
            </div>
            <div className={styles.inputArea} style={{width: '19%'}}>
                <label className={styles.label} htmlFor="areadoconhecimento">Área do conhecimento</label>
                <input className={styles.input} name="areadoconhecimento" id="areadoconhecimento"/>
            </div>
            <div className={styles.inputArea} style={{width: '11%'}}>
                <label className={styles.label} htmlFor="autornaoiny">Origem do autor</label>
                <input className={styles.input} name="autornaoiny" id="autornaoiny"/>
            </div>


            <button className={styles.button} type="submit">SALVAR</button>
        </form>
    );
};

export default FormBooks;
