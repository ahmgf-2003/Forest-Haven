import { useEffect, useState } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getLodge } from "../../firebase";

const Lodge = () => {
    const { id } = useParams();
    const [lodge, setLodge] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const type = location.state?.type || "";
    const search = location.state?.search || "";

    useEffect(() => {
        getLodge(id)
            .then(data => setLodge(data))
            .catch(err => {throw new Error(err)});
    }, []);

    if (lodge && Object.keys(lodge).length === 1) {
        navigate("/404"); // return not found page 
    }

    return (
        <section className="lodge">
            <div className="container">
                <Link to={`..${search}`} relative="path">
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
