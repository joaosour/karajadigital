import NavBar from "../components/Navbar";
import bannerHome from '../assets/indigenas karajas 1.jpg'
import styles from '../styles/Home.module.css'
import Footer from './../components/Footer.js'


export default function Home() {
    return (
        <div className={styles.body}>
            <NavBar />

            <div className={styles.ContainerBanner}>
                <img className={styles.BannerImg} src={bannerHome} alt="Banner Karaja Digital"/>
            </div>

            <div className={styles.ContainerBiography}>
                <h3 className={styles.LabelBiography}>Biografia</h3>
                <p className={styles.TextBiography}>A Biblioteca karajádigital é uma base de dados sobre os grupos falantes de língua Karajá: Karajá, Javaé e Xambioá. Habitantes imemoriais da calha do rio Araguaia, suas aldeias se distribuem entre estados de Goiás, Mato Grosso, Tocantins e Pará. A maior parte delas, entretanto, se localiza na Ilha do Bananal (TO), centro do território ocupado por esses três grupos.&nbsp;
                    Um dos objetivos desse espaço é fazer uma listagem ampla e atualizada da bibliografia produzida sobre estes três grupos. Mas, principalmente, a idéia é disponibilizar a maior quantidade possível dessa literatura em meio digital.&nbsp;
                    karajádigital é um espaço desenhado para ser colaborativo. Convidamos todos(as) interessados(as) a indicarem bibliografia e a disponibilizá-la em arquivos digitais. As referências e arquivos devem ser enviados para o nosso e-mail: karajadigital@gmail.com.&nbsp;
                    Com o tempo, esparamos que, com a colaboração de todos(as) os(as) interessados(as), karajádigital possa se constituir como uma base de dados extensa e atualizada sobre os povos de língua Karajá, difundindo o conhecimento sobre essa produção, facilitando o acesso a ela, e estimulando novos pesquisadores a mergulharem no unverso fascinante desse povo!.&nbsp;
                    Obrigado e abraços!
                </p>
            </div>

            <Footer />

        </div>
    )
}