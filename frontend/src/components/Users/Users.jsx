import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getUsers } from "../../redux/actions/actions";

const Users = ()=>{
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    return(
        <div>
            <h1>Users</h1>
            {
                users.map(user=>{
                    return(
                        <div>
                            <h3>id:{user.id}</h3>
                            <h3>titulo:{user.title}</h3>
                            <h3>imagen:</h3>
                            <img src={user.thumbnailUrl} alt="" />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;