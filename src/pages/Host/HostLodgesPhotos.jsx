import { useOutletContext } from "react-router-dom";

const HostLodgesPhotos = () => {
    const { imageUrl, name } = useOutletContext();

    return ( 
        <div className="photo">
            <img src={imageUrl} alt={name} />
        </div>
    );
}

export default HostLodgesPhotos;