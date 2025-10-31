import { NavLink, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to="/Forest-Haven/" className="logo">
                    <img src={logo} alt="logo" />
                    ForestHaven
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/Forest-Haven/host"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Host
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Forest-Haven/about"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Forest-Haven/lodges"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >
                                Lodges
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/Forest-Haven/login">
                        <FaRegUserCircle />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
