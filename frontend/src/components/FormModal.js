// Modal.js

// import React, { useState } from 'react';
import styles from './Formulario.module.css';
import FormBooks from './FormBooks';
import React,{ useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const FormModal = ({ isOpen, onClose }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // const handleInputChange1 = (e) => {
  //   setInput1(e.target.value);
  // };

  // const handleInputChange2 = (e) => {
  //   setInput2(e.target.value);
  // };

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
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              Fechar
            </button>
            <FormBooks onEdit={onEdit} setOnEdit={setOnEdit} getBooks={getBooks} />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
