import { Gallery } from "../components/Gallery.tsx";
import { Featured } from "../components/Featured.tsx";
import { useEffect, useState } from "react";
import { Review } from "../types.ts";
import apiClient from "../axios.ts";
import { ReviewCard } from "../components/ReviewCard.tsx";

export const HomePage = () => {
  const [latestReviews, setLatestReviews] = useState<Review[]>();

  const fetchLatestReviews = async () => {
    const { data } = await apiClient.get("api/reviews", {
      params: { limit: 3 },
    });
    return data;
  };

  useEffect(() => {
    fetchLatestReviews().then((reviews) => setLatestReviews(reviews));
  }, []);

  return (
    <>
      <Gallery />
      <Featured />
      <section className="bg-gray-50 py-[60px] mt-[60px] w-full">
        <p className="container text-3xl font-semibold">Последние отзывы</p>
        <div className="container grid grid-cols-3 grid-rows-1 gap-4 mb-4 pt-9">
          {latestReviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </>
  );
};
