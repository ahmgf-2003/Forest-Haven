import { useOutletContext } from "react-router-dom";

const HostLodgesDetails = () => {
    const {name, type, description} = useOutletContext();

    return (
        <div className="details">
            <h5>Name: <span>{name}</span></h5>
            <h5>Category: <span>{type}</span></h5>
            <h5>Description: <span>{description}</span></h5>
            <h5>Visibility: <span>Public</span></h5>
        </div>
    );
};

export default HostLodgesDetails;
