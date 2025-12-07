import { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const Host = () => {
    const { lodges } = useLoaderData();

    return (
        <div className="dashboard">
            <div className="details">
                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                        <span>
                            Income in last <ins>30 days</ins>
                        </span>
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
                    <Suspense fallback={<Loader />}>
                        <Await
                            errorElement={
                                <Error>
                                    <h2>Soemthing went wrong with host page</h2>
                                    <p>please try again later</p>
                                    <Link to="/">Go back to home</Link>
                                </Error>
                            }
                            resolve={lodges}
                        >
                            {(resolveLodges) =>
                                resolveLodges.slice(0, 3).map((lodge) => (
                                    <Link
                                        to={`lodges/${lodge.id}`}
                                        className="lodge"
                                        key={lodge.id}
                                    >
                                        <img
                                            src={lodge.imageUrl}
                                            alt={lodge.name}
                                        />
                                        <div className="info">
                                            <h4>
                                                {lodge.name}
                                                <span
                                                    className="price"
                                                    data-currency="$"
                                                >
                                                    {lodge.price}
                                                </span>
                                            </h4>
                                            <button>Edit</button>
                                        </div>
                                    </Link>
                                ))
                            }
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Host;
