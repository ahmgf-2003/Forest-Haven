import { Suspense } from "react";
import { Link, Await, useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const HostLodges = () => {
    const { lodges } = useLoaderData();

    return (
        <div className="lodges-list host-lodges">
            <h2 className="heading">Your listed lodges</h2>
            <Suspense fallback={<Loader />}>
                <Await
                    errorElement={
                        <Error>
                            <h2>Something went wrong with host page</h2>
                            <p>please try again later</p>
                            <Link to="/">Go back to home</Link>
                        </Error>
                    }
                    resolve={lodges}
                >
                    {(resolvedLodges) =>
                        resolvedLodges.map((lodge) => (
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
                        ))
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export default HostLodges;