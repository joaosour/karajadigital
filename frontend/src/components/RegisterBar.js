import { useNavigate } from "react-router-dom";
import styles from "./../components/RegisterBar.module.css"
import { IoIosArrowForward } from "react-icons/io";


export default function RegisterBar() {
    const navigate = useNavigate();

    return (
        <div className={styles.Background}>
            <div className={styles.BackgroundNavbar}>
                <h3 style={{color: "white", fontWeight: "500", cursor: "pointer"}} onClick={() => navigate("/area-do-colaborador")}>Área de cadastros do colaborador</h3>
                <div className={styles.CircleArrow}>
                <IoIosArrowForward />

                </div>
                <div className={styles.BackgroundComponents}>
                    <button className={styles.BackgroundComponent} onClick={() => navigate('/area-do-colaborador/cadastrar-usuario')}>Usuários</button>
                    <button className={styles.BackgroundComponent} onClick={() => navigate('/area-do-colaborador/cadastrar-livro')}>Livros</button>
                    <button className={styles.BackgroundComponent}>Fotografias</button>
                </div>

            </div>
        </div>
    )
}