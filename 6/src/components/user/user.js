import { NavLink, Outlet } from "react-router-dom";

function User() {
    return (
        <div id="outlet_wrapper">
        <div id="outlet_navbar">
            <NavLink to="profil">Profil</NavLink>
            <NavLink to="setup">Setup</NavLink>
            <NavLink to="orders">Orders</NavLink>
            <NavLink to="statistics">Statistics</NavLink>
            <NavLink to="social">Social</NavLink>
            <NavLink to="premium">Premium</NavLink>
        </div>
        <div id="outlet_outlet">
            <Outlet />
        </div>
        </div>
    )
};
export default User;