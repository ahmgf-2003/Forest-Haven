import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    useEffect(() => {
        document.querySelectorAll(".rate-bars div").forEach(rateBar => {
            rateBar.childNodes[0].style.width = rateBar.dataset.rate;
        })
    } ,[])

    return (  
        <div className="reviews">
            <h2 className="heading">
                Your reviews <span>last <ins>30 days</ins></span>
            </h2>
            <div className="reviews-rate">
                <h3>5.0 <span><FaStar /> overall rating</span></h3>
                <div className="rate-bars">
                    <div data-stars="5 stars" data-rate="100%">
                        <span></span>
                    </div>
                    <div data-stars="4 stars" data-rate="0%">
                        <span></span>
                    </div>
                    <div data-stars="3 stars" data-rate="0%">
                        <span></span>
                    </div>
                    <div data-stars="2 stars" data-rate="0%">
                        <span></span>
                    </div>
                    <div data-stars="1 star" data-rate="0%">
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="reviews-comments">
                <h3>Reviews (2)</h3>
                <div className="review-comment">
                    <span className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <p className="name">Elliot <span>December 1, 2025</span></p>
                    <p className="comment">
                        The Cozy Pine Retreat is absolutely magical! We stayed for a week 
                        and it was everything we hoped for and more. The cabin was spotless 
                        when we arrived, super comfortable, and had such a warm and inviting
                        vibe with the lights at night. The host was great and made everything
                        easy. Highly recommend if you want a peaceful escape in nature!
                    </p>
                </div>
                <div className="review-comment">
                    <span className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                    <p className="name">Sandy <span>November 23, 2025</span></p>
                    <p className="comment">
                        We had such a relaxing time at the Forest Hideaway! The cabin is
                        beautifully designed, super clean, and has everything you need for 
                        a comfortable stay. Waking up to the view of the trees right outside 
                        the big windows was incredible. This was our second visit and it 
                        won't be our last—truly perfect for unwinding and recharging!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;