import { Suspense } from "react";
import { useLocation, Link, useSearchParams, useLoaderData, Await } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Lodges = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const { lodges } = useLoaderData();
    const typeFilter = searchParams.get("type");

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
                <Suspense fallback={<Loader />}>
                    <Await
                        errorElement={
                            <Error>
                                <h2>Something went wrong</h2>
                                <p>Try again later.</p>
                                <Link to="/">Go Home</Link>
                            </Error>
                        }
                        resolve={lodges}
                    >
                        {(resolvedLodges) => {
                            const filteredLodges = resolvedLodges.filter(lodge => 
                                typeFilter ? typeFilter === lodge.type : true
                            )
                            return (
                                <div className="lodges-container">
                                    {filteredLodges.map(lodge => (
                                        <Link 
                                            to={lodge.id}
                                            state={{type: typeFilter, search: location.search}}
                                            className="lodge-card"
                                            key={lodge.id}
                                        >
                                            <img src={lodge.imageUrl} alt={lodge.name} />
                                            <div className="details">
                                                <span className="name">{lodge.name}</span>
                                                <span className="price" data-currency="$">
                                                    {lodge.price}
                                                </span>
                                                <span className={`type ${lodge.type}`}>
                                                    {lodge.type}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            );
                        }}
                    </Await>
                </Suspense>
            </div>
        </section>
    );
};

export default Lodges;
