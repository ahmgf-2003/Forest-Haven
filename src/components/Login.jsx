import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../firebase";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.state?.path || "/Forest-Haven/host";
    const message = location.state?.message

    function handleSubmit(formData) {
        const email = formData.get("email"); 
        const password = formData.get("password"); 

        if (email && password) {
            getUser({email, password})
                .then(res => {
                    if (res) {
                        console.log(res);
                        localStorage.setItem("isLogged", "true");
                        navigate(path, {replace: true})
                        return true
                    }
                    throw new Error("wrong email and/or password");
                })
        }
    }

    return (
        <section className="login">
            <div className="container">
                {message && <h3 className="login-error">{message}</h3>}
                <h2>Sign in to your account</h2>
                <form action={handleSubmit}>
                    <input type="email" name="email" placeholder="Email address" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Sign in</button>
                </form>
                <p className="create-account">
                    Don't have an account? <Link>Create one now</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
