import React from "react";
import Review from "./Review";
import '../css/ReviewsSection.css';

const generateReview = (review, id) => {
    return (
        <Review 
            id={id}
            reviewText={review.reviewText}
            userImg={review.userImg}
            username={review.username}
            userJob={review.userJob}
        />
    );
}

const ReviewsSection = ({reviews}) => {
    const allReviews = reviews.map((review, id) => {
        return generateReview(review, id);
    });

    return (
        <div className="section reviews-section">
            {allReviews}
        </div>
    );
}

export default ReviewsSection;