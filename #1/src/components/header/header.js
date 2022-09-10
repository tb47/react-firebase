import './header.css';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AppContext } from '../../App';
function Header() {
    const appContext = useContext(AppContext);
    return (
        <header>
            <div id="header_nav_left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            <div id="header_nav_right">
                <NavLink to="user">{appContext.username}</NavLink>
                <NavLink to="login">Login / Register</NavLink>
            </div>
        </header>
    )
};
export default Header;




