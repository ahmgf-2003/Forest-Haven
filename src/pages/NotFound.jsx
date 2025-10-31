import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="container">
                <h2>Sorry, the page you were looking for was not found.</h2>
                <Link to="/Forest-Haven">Return to home</Link>
            </div>
        </section>
    );
};

export default NotFound;
