// App.js

import React, { useState } from 'react';
import Modal from './../components/Formulario';

function Testes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Testes;
