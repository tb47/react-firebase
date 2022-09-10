import './header.css';

import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { AppContext } from '../../App';
import { auth } from '../../firebase/auth';

import { onAuthStateChanged } from "firebase/auth";

function Header() {
    const appContext = useContext(AppContext);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                appContext.setUser(user.email)
            } else {
                appContext.setUser();
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <header>
            <div id="header_nav_left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            {appContext.user ?
                <div id="header_nav_right">
                    <NavLink to="user">{appContext.user}</NavLink>
                    <NavLink to="logout">logout</NavLink>
                </div>
                :
                <div id="header_nav_right">
                    <NavLink to="login">Login / Register</NavLink>
                </div>
            }
        </header>
    );
};
export default Header;