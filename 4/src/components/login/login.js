import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../firebase/auth";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState(0); // 0=login,1=register
    const navigate = useNavigate();
    function switchmode(e) {
        if (e.target.id === "login_choiceLogin") {
            setMode(0);
            document.getElementById('login_choiceRegister').style.cssText = 'font-size: 20px; color: var(--fontAlternative)';
            document.getElementById('login_choiceLogin').style.cssText = 'font-size: 28px; color: var(--fontChoice)';
            document.getElementById('login_proceedBtn').innerHTML = 'Login';
        } else {
            setMode(1);
            document.getElementById('login_choiceRegister').style.cssText = 'font-size: 28px; color: var(--fontChoice)';
            document.getElementById('login_choiceLogin').style.cssText = 'font-size: 20px; color: var(--fontAlternative)';
            document.getElementById('login_proceedBtn').innerHTML = 'Register';
        };
    };
    return (
        <div id="login_div1">
            <div id="login_div2">
                <div id="login_choiceDiv">
                    <p id="login_choiceLogin" onClick={switchmode}>login</p>
                    <p id="login_choiceRegister" onClick={switchmode}>register</p>
                </div>
                <div id="login_Input">
                    <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="email" placeholder="email" size="23" onChange={e => setEmail(e.target.value)} />
                </div>
                <div id="login_Input">
                    <label>Password</label>
                    <input type="password" placeholder="password" size="23" onChange={e => setPassword(e.target.value)} />
                </div>
                <div id="login_proceed" onClick={() => {
                    login(email, password, mode).then(() => {
                        if (mode === 1) {
                            setMode(0);
                        };
                        navigate("/", { replace: true });
                    })
                }}>
                    <p id="login_proceedBtn">Login</p>
                </div>
            </div>
        </div>
    )
};
export default Login;