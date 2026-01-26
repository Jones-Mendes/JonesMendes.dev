import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br />
            <span>Jones Mendes</span>
            <br />
            Dev Full Stack
            <br />
            <sub>
              Código que protege, guia e sustenta experiências digitais...
            </sub>
          </p>
          <Link to="/Sobre" className={`${styles.btn} ${styles["btn-red"]}`}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure className={styles["video-glass"]}>
          <video className={styles["img-home"]} src="/JonDev.mp4" autoPlay loop muted />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home;
