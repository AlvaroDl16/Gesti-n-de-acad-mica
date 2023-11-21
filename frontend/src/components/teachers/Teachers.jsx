import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getTeachers } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const Teachers = ()=>{
    const dispatch = useDispatch();
    const teach = useSelector(state => state.teachers);
    useEffect(()=>{
        dispatch(getTeachers())
    },[])

    return(
        <div>
            <h1>PROFESORES</h1>
            <div>
                <table align="center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>primer nombre</th>
                            <th>segundo nombre</th>
                            <th>edad</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
            {
                teach.length>=1 && teach.map(el=>{
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
                            </td>
                        </tr>
                    )
                })
            }
                    </tbody>
                </table>
            </div>
            <Link to="/">volver</Link>
        </div>
    )
}

export default Teachers;