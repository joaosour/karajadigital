import styles from "./Navbar.css"

export default function NavBar() {
  return(
    <div className={styles.bodys}>
      <ul>
        <a href='/home'>Biblioteca Digital</a>
        <a href='/lista-bibliografica'> Lista bibliográfica</a>
        <a href='/acervo-fotografico'> Acervo fotográfico</a>
        <a href='/login'> Login</a>
      </ul>
    </div>
  ) 

}