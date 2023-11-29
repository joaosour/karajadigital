import React from "react";
import styles from './Navbar.module.css'
import logo from '../assets/KARAJA digital.svg'

export default function NavBar() {

  return (
    <div className={styles.Background}>
    <div className={styles.BackgroundNavbar}>
      <a href='/home'>
        <img className={styles.Logo} src={logo} href='/home' alt="Karaja Digital Logo" />
      </a>
      <div className={styles.LinksContainer}>
        <a className={styles.LinksText} href='/home'>Biblioteca Digital</a>
        <a className={styles.LinksText} href='/lista-bibliografica'>Lista bibliográfica</a>
        <a className={styles.LinksText} href='/acervo-fotografico'>Acervo fotográfico</a>
      </div>
      <button-admin>
        <a className={styles.TextAdmin} href="/login">Área do colaborador</a>
      </button-admin>
    </div>
    </div>
  );
}
