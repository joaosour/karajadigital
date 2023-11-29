// LoginFormModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginFormModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com os dados do formulário, como fazer uma solicitação de login
    console.log('Usuário:', username);
    console.log('Senha:', password);
    // Feche o modal após o envio do formulário
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
    >
      <h2>Modal de Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </Modal>
  );
};

export default LoginFormModal;
