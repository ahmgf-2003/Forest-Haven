import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Lodge = () => {
    const { id } = useParams();
    const [lodge, setLodge] = useState(null);
    const location = useLocation();

    const type = location.state?.type;

    useEffect(() => {
        fetch("/api/lodge/" + id)
            .then((res) => res.json())
            .then((data) => setLodge(data.lodge));
    }, []);

    return (
        <section className="lodge">
            <div className="container">
                <Link to="/lodges" state={{ type }}>
                    <FaArrowLeftLong /> Back to {type || "all"} Lodges
                </Link>
                {lodge && (
                    <div className="lodge-card">
                        <img src={lodge.imageUrl} alt={lodge.name} />
                        <div className="details">
                            <span className={`type ${lodge.type}`}>{lodge.type}</span>
                            <p className="name">{lodge.name}</p>
                            <p className="price" data-currency="$">{lodge.price}</p>
                            <p className="description">{lodge.description}</p>
							<button>Rent this lodge</button>
						</div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Lodge;
