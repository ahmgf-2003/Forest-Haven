import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HostLodges = () => {
    const [lodges, setLodges] = useState(null);

    useEffect(() => {
        fetch("/api/host/lodges")
            .then((res) => res.json())
            .then((data) => setLodges(data.lodges));
    }, []);

    const lodgesComponents = lodges &&
        lodges.map((lodge) => (
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
        ));

    return (
        <div className="lodges-list host-lodges">
            <h2 className="heading">Your listed Lodges</h2>
            {lodgesComponents}
        </div>
        );
};

export default HostLodges;
