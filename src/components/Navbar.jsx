import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/">
                    {/*  isActive is a boolean that NavLink is giving us (no charge 😅) */}
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/students">
                    Students
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;