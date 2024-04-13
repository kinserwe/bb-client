import { useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import { Link, useParams } from "react-router-dom";
import apiClient from "../axios.ts";
import ProductStatus from "../components/UI/ProductStatus.tsx";
import Loader from "../components/Loader.tsx";
import getReviewName from "../utils/getReviewName.ts";
import green_heart from "../assets/icons/green_heart.svg";
import defaultUser from "../assets/images/default_user.png";
import Tabs, { Tab } from "../components/UI/Tabs.tsx";
import Rating from "../components/UI/Rating.tsx";
import ReviewList from "../components/ReviewList.tsx";
import { Product, Review } from "../types/product.ts";
import { PaginatedResponse } from "../types/api.ts";

export const ProductPage = () => {
  const { productId } = useParams();
  const [productImage, setProductImage] = useState<string>();
  const [product, setProduct] = useState<Product>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(1);

  const tabs: Tab[] = [
    { label: "Описание", content: <span>{product?.description}</span> },
    {
      label: "Дополнительная информация",
      content: <span>Дополнительная информация</span>,
    },
    { label: "Отзывы", content: <ReviewList reviews={reviews} /> },
  ];

  useEffect(() => {
    if (productId) {
      setLoading(true);
      getImage(`products/${productId}`).then((image) => {
        setProductImage(image);
        setLoading(false);
      });
      apiClient
        .get<Product>(`api/products/${productId}`)
        .then(({ data }) => setProduct(data));
      apiClient
        .get<
          PaginatedResponse<Review>
        >(`api/reviews`, { params: { product_id: productId } })
        .then(({ data }) => setReviews(data.results));
    }
  }, [productId]);

  return (
    <div className="container flex flex-col pb-[60px]">
      <div className="flex gap-x-6">
        <div className="h-[480px] w-[480px]">
          {loading ? (
            <Loader />
          ) : (
            <img
              src={productImage}
              className="h-full w-full object-contain"
              alt="product image"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-y-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <p className="text-2xl font-medium">{product?.name}</p>
              <ProductStatus productQuantity={product?.quantity} />
            </div>
            <div className="mb-5 mt-3 flex items-center gap-x-1">
              {product && (
                <>
                  <Rating value={product?.rating} />
                  <span>
                    {reviews.length + " " + getReviewName(reviews.length)}
                  </span>
                </>
              )}
            </div>
            <span className="border-b-1 pb-5 text-2xl font-medium text-hard-primary">
              {product?.price.toFixed(2)} руб.
            </span>
          </div>
          <div className="flex gap-x-6 gap-y-4">
            <img className="w-16" src={defaultUser} alt="manufacturer_icon" />
            <div>
              <div className="text-base font-medium text-gray-800">
                {product?.manufacturer.name}
              </div>
              <p className="text-sm text-gray-400">
                {product?.manufacturer.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-y-1 border-gray-200 py-[18px]">
            <div className="flex rounded-3xl border-1 border-gray-200 p-1.5">
              <button
                className="h-[34px] w-[34px] rounded-[50%] bg-gray-200 text-xl font-semibold text-gray-800 transition-colors duration-200 enabled:hover:bg-gray-300 enabled:active:bg-gray-400"
                disabled={amount === 1}
                onClick={() => setAmount((prevAmount) => prevAmount - 1)}
              >
                -
              </button>
              <div className="flex h-9 w-11 flex-1 items-center justify-center text-lg font-semibold text-gray-800">
                {amount}
              </div>
              <button
                className="h-[34px] w-[34px] rounded-[50%] bg-gray-200 text-xl font-semibold text-gray-800 transition-colors duration-200 enabled:hover:bg-gray-300 enabled:active:bg-gray-400"
                disabled={amount === product?.quantity}
                onClick={() => setAmount((prevAmount) => prevAmount + 1)}
              >
                +
              </button>
            </div>
            <button
              type="submit"
              className="flex-1 rounded-[44px] bg-primary p-3.5 font-semibold text-white transition-colors duration-200 hover:bg-hard-primary"
            >
              Добавить в корзину
            </button>
            <button className="flex h-[52px] w-[52px] items-center justify-center rounded-[50%] bg-[#20B256]/20 transition-colors duration-200 hover:bg-[#20B256]/40">
              <img src={green_heart} alt="" className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-col gap-y-2 font-medium">
            {"Категория: "}
            <Link
              to={`/catalog/${product?.parent_category}`}
              className="underline-hover text-gray-600"
            >
              {product?.parent_category}
            </Link>
            <br />
            {"Подкатегория: "}
            <Link
              to={`/catalog/${product?.parent_category}/${product?.category}`}
              className="underline-hover text-gray-600"
            >
              {product?.category}
            </Link>
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};
