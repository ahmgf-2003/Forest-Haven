import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostLodges } from "../../firebase";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const HostLodges = () => {
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

    const lodgesComponents =
        lodges &&
        lodges.map((lodge) => (
            <Link to={lodge.id} className="lodge" key={lodge.id}>
                <img src={lodge.imageUrl} alt={lodge.name} />
                <div className="info">
                    <h4>
                        {lodge.name}
                        <span className="price" data-currency="$">
                            {lodge.price}
                        </span>
                    </h4>
                </div>
            </Link>
        ));

    return (
        <div className="lodges-list host-lodges">
            <h2 className="heading">
                {lodges ? "Your listed lodges" : "No lodges to list"}
            </h2>
            {lodgesComponents}
        </div>
    );
};

export default HostLodges;
