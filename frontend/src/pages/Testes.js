import React, { useState } from 'react';
import LoginFormModal from './LoginFormModal'; 

export default function Testes() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <button onClick={openModal}>Abrir Modal</button>
            <LoginFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>

    )
}