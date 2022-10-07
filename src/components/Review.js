import React from "react";
import Text from "./Text";
import '../css/Review.css';

const Review = (props) => {
    return (
        <div className="review" key={props.id}>
            <Text
                classes="medium light-bold review-txt"
                text={props.reviewText}
            />
            <div className="user-details">
                <img src={props.userImg} alt="user-img" className="user-img" />
                <div className="user-text-details">
                    <Text
                        classes="light-bold username"
                        text={props.username}
                    />
                     <Text
                        classes="small txt-gray user-job"
                        text={props.userJob}
                    />
                </div>
            </div>
        </div>
    );
}

export default Review;