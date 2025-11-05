import { useEffect, useState } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import { getLodges } from "../../firebase";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Lodges = () => {
    const [lodges, setLodges] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const location = useLocation();

    const typeFilter = searchParams.get("type");

    useEffect(() => {
        getLodges()
            .then(data => setLodges(data))
            .catch(err => {
                setError(true)
                throw new Error(err)
            })
            .finally(() => setLoading(false));
    }, []);

    if (error) {
        return (
            <Error>
                <h2>Soemthing went wrong with lodges page</h2>
                <p>please try again later</p>
                <Link to="/Forest-Haven/">Go back to home</Link>
            </Error>
        );
    }

        if (loading) {
        return <Loader />;
    }

    // function to add search query to the current url
    function addSearchquery(type, value) {
        const sp = new URLSearchParams(searchParams);

        if (value) {
            sp.set(type, value);
        } else {
            sp.delete(type);
        }

        return `?${sp.toString()}`;
    }

    return (
        <section className="lodges">
            <div className="container">
                <h2>Explore our lodges options</h2>
                <div className="filters">
                    <Link
                        className={`simple ${typeFilter === "simple" ? "selected" : ""}`}
                        to={addSearchquery("type", "simple")}
                    >
                        Simple
                    </Link>
                    <Link
                        className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                        to={addSearchquery("type", "luxury")}
                    >
                        Luxury
                    </Link>
                    <Link
                        className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                        to={addSearchquery("type", "rugged")}
                    >
                        Rugged
                    </Link>
                    {typeFilter && (
                        <Link className="clear" to={addSearchquery("type")}>
                            clear filters
                        </Link>
                    )}
                </div>
                <div className="lodges-container">
                    {lodges &&
                        lodges.map((lodge) => {
                            if (typeFilter && typeFilter !== lodge.type) {
                                return;
                            } 
                            return (
                                <Link 
                                    to={lodge.id} 
                                    state={{type: typeFilter, search: location.search}} 
                                    className="lodge-card" 
                                    key={lodge.id}
                                >
                                    <img src={lodge.imageUrl} alt={lodge.name}/>
                                    <div className="details">
                                        <span className="name">{lodge.name}</span>
                                        <span className="price" data-currency="$">
                                            {lodge.price}
                                        </span>
                                        <div>
                                            <span className={`type ${lodge.type}`}>
                                                {lodge.type}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }).filter(lodge => lodge ? true : false) // to remove undefined values
                        } 
                </div>
            </div>
        </section>
    );
};

export default Lodges;
