import { useEffect, useState } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";

const Lodges = () => {
    const [lodges, setLodges] = useState(null);
    const [searchParams] = useSearchParams();
    const location = useLocation();

    const typeFilter = searchParams.get("type") || location.state?.type;

    useEffect(() => {
        fetch("/api/lodges")
            .then((res) => res.json())
            .then((data) => setLodges(data.lodges));
    }, []);

    if (!lodges) {
        return (
            <section>
                <div className="container">
                    <h2 style={{ fontSize: "40px" }}>Loading...</h2>
                </div>
            </section>
        );
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
                                <Link to={lodge.id} state={{type: typeFilter}} className="lodge-card" key={lodge.id}>
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
