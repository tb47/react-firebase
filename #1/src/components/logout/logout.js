import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                console.log('logout clicked');
                navigate('/');
            }}>logout</button>
        </div>
    )
};
export default Logout;