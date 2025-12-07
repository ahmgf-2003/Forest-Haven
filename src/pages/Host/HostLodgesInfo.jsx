import { Suspense } from "react";
import { Outlet, Link, NavLink, Await, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const HostLodgesInfo = () => {
    const { lodge } = useLoaderData();

    return (
        <div className="host-lodges-info">
            <Link to="/host/lodges">
                <FaArrowLeftLong /> Back to all Lodges
            </Link>
            <Suspense fallback={<Loader />}>
                <Await
                    errorElement={
                        <Error>
                            <h2>You Can't access this lodge</h2>
                            <p>you don't have authority to access it</p>
                            <Link to="/host">Go back to host</Link>
                        </Error>
                    }
                    resolve={lodge}
                >
                    {(resolvedLodge) => (
                        <div className="lodge-info">
                            <div className="lodge-view">
                                <img src={resolvedLodge.imageUrl} alt={resolvedLodge.name} />
                                <div>
                                    <h4 className={`type ${resolvedLodge.type}`}>{resolvedLodge.type}</h4>
                                    <h3>{resolvedLodge.name}</h3>
                                    <span className="price" data-currency="$">
                                        {resolvedLodge.price}
                                    </span>
                                </div>
                            </div>
                            <nav className="lodge-nav">
                                <NavLink 
                                    className={({isActive}) => isActive ? "active" : null}
                                    to="."
                                    end
                                >
                                    Details
                                </NavLink>
                                <NavLink 
                                    className={({isActive}) => isActive ? "active" : null}
                                    to="pricing"
                                >
                                    Pricing
                                </NavLink>
                                <NavLink 
                                    className={({isActive}) => isActive ? "active" : null}
                                    to="photos"
                                >
                                    Photos
                                </NavLink>
                            </nav>
                            <Outlet context={resolvedLodge} />
                        </div>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};

export default HostLodgesInfo;