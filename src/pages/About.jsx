import { Link } from "react-router-dom"
import aboutImg from "../assets/images/about.png";

const About = () => {
    return (
        <section className="about">
            <img src={aboutImg} alt="lodge in forset" />
            <div className="container">
                <div className="details">
                    <h2>Forget hotel halls, Find hidden trails.</h2>
                    <p>
                        We're here to help you trade hotel carpets for pine
                        needles and phone buzz for birdsong. Our handpicked
                        lodges are tucked away in the quiet corners of the world
                        where the air is crisp, the trails are close, and your
                        only neighbors are trees.
                        <br />
                        <br />
                        Foggy mornings, fireside nights, and that
                        cedar-in-the-air kind of calm. We find lodges that feel
                        like a true escape — no crowds, no traffic, just a cozy
                        basecamp for whatever wild you're into.
                    </p>
                </div>
                <div className="explore">
                    <span>Find your lodge.</span>
                    <span>Feel at home.</span>
                    <Link to="/lodges">Explore our lodges</Link>
                </div>
            </div>
        </section>
    );
};

export default About;
