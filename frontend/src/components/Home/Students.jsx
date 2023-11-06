import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getStudents } from "../../redux/actions/actions";

const Students = ()=>{
    const dispatch = useDispatch();
    const students = useSelector(state => state.students);

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
                students.map(Element=>{
                    return(
                        <tr key={Element.id}>
                            <td>{Element.id}</td>
                            <td>{Element.firtsName}</td>
                            <td>{Element.lastName}</td>
                            <td>{Element.age}</td>
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