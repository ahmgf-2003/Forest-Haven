import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
    return (
        <section className="host">
            <div className="container">
                <nav className="host-van">
                    <NavLink
                        to="."
                        className={({ isActive }) => isActive ? "active" : null}
                        end
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="income"
                        className={({ isActive }) => isActive ? "active" : null}
                    >
                        Income
                    </NavLink>
                    <NavLink
                        to="lodges"
                        className={({ isActive }) => isActive ? "active" : null}
                    >
                        Lodges
                    </NavLink>
                    <NavLink
                        to="reviews"
                        className={({ isActive }) => isActive ? "active" : null}
                    >
                        Reviews
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </section>
    );
};

export default HostLayout;
