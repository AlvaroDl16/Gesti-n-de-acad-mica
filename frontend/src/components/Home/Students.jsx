import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getStudents, deleteStudent } from "../../redux/actions/actions";
import styles from "./show_Students.module.css";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

const Students = ()=>{
    const dispatch = useDispatch();
    const hola = useSelector(state => state.students);

    useEffect(()=>{
        dispatch(getStudents())
    },[dispatch])

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este estudiante?")) {
            await dispatch(deleteStudent(id));
        }
    };

    const sortedStudents = [...hola].sort((a, b) => a.id - b.id);

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
                sortedStudents.length>=1 && sortedStudents.map(el=>{
                    return( 
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.firtsName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.age}</td>
                            <td>
                                <button  onClick={() => handleDelete(el.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <Link to={`/formUpdateStudent/${el.id}`}>Editar</Link>
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