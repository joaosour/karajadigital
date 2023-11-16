import NavBar from "../components/Navbar";
import styles from "./Home.css"


export default function Home() {
    return (
        <div className={styles.body} >
            <NavBar />
            <h3>Página Home/Biblioteca Digital</h3>
        </div>
    )
}