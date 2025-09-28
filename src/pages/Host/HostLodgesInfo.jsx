import { useState, useEffect } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const HostLodgesInfo = () => {
    const { id } = useParams();
    const [lodge, setLodge] = useState(null);

    useEffect(() => {
        fetch(`/api/host/lodges/${id}`)
            .then(res => res.json())
            .then(data => setLodge(data.lodge));
    }, []);

    if (!lodge) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="host-lodges-info">
            <Link to="/host/lodges">
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
