import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostLodges } from "../../firebase";
import Loader from "../../components/Loader"

const HostLodges = () => {
    const [lodges, setLodges] = useState(null);

    useEffect(() => {
        getHostLodges()
            .then(data => setLodges(data))
            .catch(err => {throw new Error(err)});
    }, []);

        if (!lodges) {
        return <Loader />;
    }

    const lodgesComponents =
        lodges &&
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
            <h2 className="heading">
                {lodges ? "Your listed lodges" : "No lodges to list"}
            </h2>
            {lodgesComponents}
        </div>
    );
};

export default HostLodges;
