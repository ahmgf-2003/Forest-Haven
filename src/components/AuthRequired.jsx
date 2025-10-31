import { useLocation, Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
    const isLogged = localStorage.getItem("isLogged");
    const location = useLocation();

    if (!isLogged) {
        return (
            <Navigate
                to="/Forest-Haven/login"
                replace
                state={{
                    path: `${location.pathname}${location.search}`,
                    message: "You need to login first"
                }}
            />
        );
    }

    return <Outlet />;
};

export default AuthRequired;
