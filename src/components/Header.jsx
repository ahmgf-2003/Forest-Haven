import { NavLink, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                    ForestHaven
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/host"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Host
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lodges"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Lodges
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/login">
                        <FaRegUserCircle />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
