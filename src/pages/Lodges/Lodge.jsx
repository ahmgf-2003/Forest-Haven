import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getLodge } from "../../firebase";
import Loader from "../../components/Loader"
import Error from "../../components/Error";

const Lodge = () => {
    const { id } = useParams();
    const [lodge, setLodge] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const type = location.state?.type || "";
    const search = location.state?.search || "";

    useEffect(() => {
        getLodge(id)
            .then(data => setLodge(data))
            .catch(err => {
                setError(true)
                throw new Error(err)
            })
            .finally(() => setLoading(false));
    }, []);

    if (error || (lodge && Object.keys(lodge).length === 1)) {
        return (
            <Error>
                <h2>It looks like you tried to access a lodge does't exisit</h2>
                <Link to={`/Forest-Haven/Lodges`}>Go back to lodges</Link>
            </Error>
        );
    }

    if (loading) {
        return <Loader />;
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
