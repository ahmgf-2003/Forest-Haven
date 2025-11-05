import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getHostLodges } from "../../firebase";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const Host = () => {
    const [lodges, setLodges] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHostLodges()
            .then(data => setLodges(data))
            .catch(err => {
                setError(true)
                throw new Error(err)
            })
            .finally(() => setLoading(false));
    }, [])

    if (error) {
        return (
            <Error>
                <h2>Soemthing went wrong with host page</h2>
                <p>please try again later</p>
                <Link to="/Forest-Haven/">Go back to home</Link>
            </Error>
        );
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="dashboard">
            <div className="details">
                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                        <span>Income in last <ins>30 days</ins></span>
                        <span>Details</span>
                    </p>
                    <h3>$2,260</h3>
                </div>
            </div>
            <div className="review">
                <div className="container">
                    <h2>
                        <span>
                            Review score 
                            <span className="rate">
                                <FaStar /> <b>5.0</b>/5
                            </span>
                        </span>
                        <span>Details</span>
                    </h2>
                </div>
            </div>
            <div>
                <div className="lodges-list">
                    <h2 className="heading">
                        {lodges ? "Your listed lodges" : "No lodges to list"}
                        <Link to="lodges">View all</Link>
                    </h2>
                    {lodges && 
                        lodges.slice(0, 3).map(lodge => (
                            <Link to={`lodges/${lodge.id}`} className="lodge" key={lodge.id}>
                                <img src={lodge.imageUrl} alt={lodge.name} />
                                <div className="info">
                                    <h4>
                                        {lodge.name}
                                        <span className="price" data-currency="$">
                                            {lodge.price}
                                        </span>
                                    </h4>
                                    <button>Edit</button>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Host;
