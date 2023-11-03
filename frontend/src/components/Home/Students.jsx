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
            {
                students.map(Element=>{
                    return(
                        <div>
                            <h3>id:{Element.id}</h3>
                            <h3>primer nombre:{Element.firtsName}</h3>
                            <h3>primer nombre:{Element.lastName}</h3>
                            <h3>primer nombre:{Element.age}</h3>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Students;