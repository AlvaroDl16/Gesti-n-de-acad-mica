import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getStudents } from "../../redux/actions/actions";

const Students = ()=>{
    const dispatch = useDispatch();
    const hola = useSelector(state => state.students);
    useEffect(()=>{
        dispatch(getStudents())
    },[])

    return(
        <div>
            <h1>Students</h1>
            <div>
                <table>
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