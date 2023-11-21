import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getStudents } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import styles from "./show_Students.module.css";
import Navbar from "../navbar/navbar";

const Students = ()=>{
    const dispatch = useDispatch();
    const hola = useSelector(state => state.students);
    useEffect(()=>{
        dispatch(getStudents())
    },[])

    return(
        <div>
            <Navbar/>
            <h3>Students</h3>
            <div>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th>id</th>
                            <th>primer nombre</th>
                            <th>segundo nombre</th>
                            <th>edad</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
            {
                hola.length>=1 && hola.map(el=>{
                    return( 
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.firtsName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.age}</td>
                            <td>
                                <button>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <Link to="/updateStudent">
                                    EDITAR
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students;