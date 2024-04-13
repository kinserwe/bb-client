import { FC, useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import Rating from "./UI/Rating.tsx";
import defaultUserImage from "../assets/images/default_user.png";
import formatTimeDifference from "../utils/formatTimeDifference.ts";
import { Review } from "../types/product.ts";

interface ReviewCardProps {
  review: Review;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const [userImage, setUserImage] = useState<string>();

  useEffect(() => {
    getImage(`users/${review.user.id}`).then((image) => setUserImage(image));
  }, [review.user.id]);

  return (
    <div className="flex flex-col gap-y-3 border-b-gray-200 not-last:border-b-1 not-last:pb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img
            src={userImage || defaultUserImage}
            alt="user image"
            className="h-11 w-11 rounded-[50%] object-cover"
          />
          <div>
            <div className="text-lg font-medium text-gray-900">
              {review.user.first_name + " " + review.user.last_name}
            </div>
            <Rating value={review.value} />
          </div>
        </div>
        <span>{formatTimeDifference(review.created_at)}</span>
      </div>
      <p className="text-gray-600">{review.text}</p>
    </div>
  );
};

const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="flex w-full flex-col gap-y-5">
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewCard review={review} />)
      ) : (
        <span className="self-center py-12 text-xl text-gray-900">
          Нет отзывов
        </span>
      )}
    </div>
  );
};

export default ReviewList;
