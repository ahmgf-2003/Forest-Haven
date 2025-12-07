import { Suspense } from "react";
import { useLocation, useParams, Link, Await, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const Lodge = () => {
    const { id } = useParams();
    const location = useLocation();
    const { lodge } = useLoaderData(id);

    const type = location.state?.type || "";
    const search = location.state?.search || "";

    return (
        <section className="lodge">
            <div className="container">
                <Link to={`..${search}`} relative="path">
                    <FaArrowLeftLong /> Back to {type || "all"} Lodges
                </Link>
                <Suspense fallback={<Loader />}>
                    <Await
                        errorElement={
                            <Error error={lodge}>
                                <h2>
                                    It looks like you tried to access a lodge
                                    does't exisit
                                </h2>
                                <Link to="/Lodges">
                                    Go back to lodges
                                </Link>
                            </Error>
                        }
                        resolve={lodge}
                    >
                        {(resolvedLodge) => (
                            <div className="lodge-card">
                                <img
                                    src={resolvedLodge.imageUrl}
                                    alt={resolvedLodge.name}
                                />
                                <div className="details">
                                    <span
                                        className={`type ${resolvedLodge.type}`}
                                    >
                                        {resolvedLodge.type}
                                    </span>
                                    <p className="name">{resolvedLodge.name}</p>
                                    <p className="price" data-currency="$">
                                        {resolvedLodge.price}
                                    </p>
                                    <p className="description">
                                        {resolvedLodge.description}
                                    </p>
                                    <button>Rent this lodge</button>
                                </div>
                            </div>
                        )}
                    </Await>
                </Suspense>
            </div>
        </section>
    );
};

export default Lodge;
