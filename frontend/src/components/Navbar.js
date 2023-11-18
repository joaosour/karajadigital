import React from "react";
import styles from './Navbar.module.css'

export default function NavBar() {

  return (
    <div className={styles.Background}>
      <div className={styles.LinksContainer}>
          <a className={styles.LinksText} href='/home'>Biblioteca Digital</a>
          <a className={styles.LinksText} href='/lista-bibliografica'>Lista bibliográfica</a>
          <a className={styles.LinksText} href='/acervo-fotografico'>Acervo fotográfico</a>
          <a className={styles.LinksText} href='/login'>Login</a>
      </div>
    </div>
  );
}
