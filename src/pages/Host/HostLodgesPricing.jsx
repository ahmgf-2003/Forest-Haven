import { useOutletContext } from "react-router-dom";

const HostLodgesPricing = () => {
    const { price } = useOutletContext();

    return (
        <div className="pricing">
            <h2 className="price" data-currency="$">{price}</h2>
        </div>
    );
};

export default HostLodgesPricing;
