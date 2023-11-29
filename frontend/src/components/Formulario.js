// Modal.js

import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ isOpen, onClose }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              Fechar
            </button>
            <div>
              <label>
                Input 1:
                <input type="text" value={input1} onChange={handleInputChange1} />
              </label>
            </div>
            <div>
              <label>
                Input 2:
                <input type="text" value={input2} onChange={handleInputChange2} />
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Formulario;
