import styles from "./../components/RegisterBar.module.css"
import { IoIosArrowForward } from "react-icons/io";


export default function RegisterBar() {
    return (
        <div className={styles.Background}>
            <div className={styles.BackgroundNavbar}>
                <h3 style={{color: "white", fontWeight: "500"}}>Área de cadastros do colaborador</h3>
                <div className={styles.CircleArrow}>
                <IoIosArrowForward />

                </div>
                <div className={styles.BackgroundComponents}>
                    <button className={styles.BackgroundComponent}>Usuários</button>
                    <button className={styles.BackgroundComponent}>Livros</button>
                    <button className={styles.BackgroundComponent}>Fotografias</button>
                </div>

            </div>
        </div>
    )
}