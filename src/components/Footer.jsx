import { FaHeart } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>&copy; {year} ForestHaven</p>
            <span>Made With <FaHeart /> by Ahmed</span>
        </footer>
    );
};

export default Footer;
