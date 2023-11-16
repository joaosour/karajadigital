import React from "react";
import styles from "./Navbar.css";
import styled from "styled-components"

export default function NavBar() {

  return (
    <div className={styles.NavBarBackground}>
      <ul>
        <li><a href='/home'>Biblioteca Digital</a></li>
        <li><a href='/lista-bibliografica'>Lista bibliográfica</a></li>
        <li><a href='/acervo-fotografico'>Acervo fotográfico</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>
    </div>
  );
}
