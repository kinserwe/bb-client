import { FC } from "react";

interface StatusProps {
  productQuantity: number | undefined;
}

const ProductStatus: FC<StatusProps> = ({ productQuantity }) => {
  return (
    <span
      className={`rounded px-2 py-1 text-sm ${
        productQuantity && productQuantity > 0
          ? "bg-[#20B526]/20 px-2 py-1 text-primary"
          : "bg-[#EA4B48]/20 px-2 py-1 text-red-600"
      }`}
    >
      {productQuantity
        ? `Есть в наличии (${productQuantity})`
        : "Нет в наличии"}
    </span>
  );
};

export default ProductStatus;
