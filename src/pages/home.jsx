import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="landing">
            <div className="container">
                <div className="caption">
                    <h2>Escape to Your Forest Retreat</h2>
                    <p>
                        Add serenity to your soul by staying in a house nestled
                        in the woods. Book the perfect forest home for your
                        ultimate nature escape.
                    </p>
                </div>
                <Link to="/lodges">
                    Find your lodge
                </Link>
            </div>
        </section>
    );
};

export default Home;
