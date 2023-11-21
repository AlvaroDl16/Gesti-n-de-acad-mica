import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
    return(
        <div className={styles.nav}>
            <h2>IESTP SUIZA</h2>
            <ul className={styles.menu_links}>
                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link>Administrar estudiantes</Link>
                    <ul className={styles.submenu_links}>
                        <li>
                            <Link to="/formCreateStudent">Crear estudiante</Link>
                        </li>
                        <li>
                            <Link to="/Home">Ver estudiantes</Link>
                        </li>
                    </ul>
                </li>

                <li>
                <Link>Administrar profesores</Link>
                    <ul className={styles.submenu_links}>
                        <li>
                            <Link to="/formCreateTeacher">Crear profesor</Link>
                        </li>
                        <li>
                            <Link to="/teachers">Ver profesores</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;