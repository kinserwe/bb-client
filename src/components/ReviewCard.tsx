import { FC, useEffect, useState } from "react";
import { Review } from "../types.ts";
import quote from "../assets/icons/quote.svg";
import { Link } from "react-router-dom";
import defaultUserImage from "../assets/images/default_user.png";
import Rating from "@mui/material/Rating";
import { getImage } from "../firebase.ts";

interface IReviewCard {
  review: Review;
}
export const ReviewCard: FC<IReviewCard> = ({ review }) => {
  const [userImage, setUserImage] = useState<string>();

  useEffect(() => {
    getImage(`users/${review.user.id}`).then((image) => setUserImage(image));
  }, []);

  return (
    <div className="flex flex-col gap-y-6 p-6 bg-white rounded-lg pt-[64px] relative">
      <img src={quote} alt="quote" className="absolute top-6 left-6" />
      <p className="flex-1">{review.text}</p>
      <Link
        className="text-sm text-gray-700 underline-hover"
        to={`/products/${review.product.id}`}
      >
        {review.product.name}`
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-3">
          <img
            src={userImage ?? defaultUserImage}
            alt="logo"
            className="h-[56px] w-[56px] rounded-[28px] object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="text-base font-medium">
              {review.user.first_name + " " + review.user.last_name}
            </div>
            <div className="text-sm text-gray-400">
              {review.user.is_staff ? "Администратор" : "Покупатель"}
            </div>
          </div>
        </div>
        <Rating value={review.value} precision={0.5} readOnly size="medium" />
      </div>
    </div>
  );
};
