import { useState, useEffect } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getHostLodge } from "../../firebase";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const HostLodgesInfo = () => {
    const { id } = useParams();
    const [lodge, setLodge] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHostLodge(id)
            .then(data => setLodge(data))
            .catch(err => {
                setError(true)
                throw new Error(err)
            })
            .finally(() => setLoading(false));
    }, []);

    if (error || lodge === undefined) {
        return (
            <Error>
                <h2>You Can't access this lodge</h2>
                <p>you don't have authority to access it</p>
                <Link to="/Forest-Haven/host">Go back to host</Link>
            </Error>
        );
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="host-lodges-info">
            <Link to="/Forest-Haven/host/lodges">
                <FaArrowLeftLong /> Back to all Lodges
            </Link>
            <div className="lodge-info">
                <div className="lodge-view">
                    <img src={lodge.imageUrl} alt={lodge.name} />
                    <div>
                        <h4 className={`type ${lodge.type}`}>{lodge.type}</h4>
                        <h3>{lodge.name}</h3>
                        <span className="price" data-currency="$">
                            {lodge.price}
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
                <Outlet context={lodge} />
            </div>
        </div>
    );
};

export default HostLodgesInfo;