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
            <nav>
                <div id="header_nav_left">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="about">About</NavLink>
                </div>
                {appContext.user ?
                    <div id="header_nav_right">
                        <div id="header_nav_right_user_outer"
                            onMouseEnter={() => document.getElementById('header_nav_right_user_dropdown').style.display = 'flex'}
                            onMouseLeave={() => document.getElementById('header_nav_right_user_dropdown').style.display = 'none'}
                        >
                            <div id ="header_nav_right_user_main">
                            <NavLink to="user">{appContext.user}</NavLink>
                            </div>
                            <div id="header_nav_right_user_dropdown">
                                <NavLink to="user/setup">Setup</NavLink>
                                <NavLink to="user/profil">Profil</NavLink>
                                <NavLink to="user/statistics">Statistics</NavLink>
                            </div>
                        </div>
                        {appContext.shopuser ?
                            <NavLink to="shoppingcard">{appContext.amounttopay}</NavLink>
                            :
                            null
                        }
                        <NavLink to="logout">logout</NavLink>
                    </div>
                    :
                    <div id="header_nav_right">
                        {appContext.shopuser ?
                            <NavLink to="shoppingcard">{appContext.amounttopay}</NavLink>
                            :
                            null
                        }
                        <NavLink to="login">Login / Register</NavLink>
                    </div>
                }
            </nav>
        </header>
    );
};
export default Header;