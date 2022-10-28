import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";

function Logout() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                logout().then(() => {
                    navigate('/');
                })}}>logout</button>
        </div>
    )
};
export default Logout;