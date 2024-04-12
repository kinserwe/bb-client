import ProductStatus from "./UI/ProductStatus.tsx";

const Wishlist = () => {
  return (
    <div className="container flex border-collapse flex-col gap-y-6 rounded-md border-1 pb-6">
      <table className="w-full">
        <thead>
          <tr className="border-b-1 text-gray-900">
            <td className="px-6 py-2">Товар</td>
            <td className="px-6 py-2">Цена</td>
            <td className="px-6 py-2">Наличие</td>
            <td className="px-6 py-2"></td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-1">
            <td className="px-6 py-2">Сперма бобра</td>
            <td className="px-6 py-2">1000 руб.</td>
            <td className="px-6 py-2">
              <ProductStatus productQuantity={0} />
            </td>
            <td className="flex items-center gap-x-6 px-6 py-2">
              <button className="bg-primary px-8 py-3.5 text-white">
                В корзину
              </button>
              <button className="h-6 w-6 rounded-[50%] border-1">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
