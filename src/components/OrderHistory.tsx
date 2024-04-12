import { Pagination } from "@mui/material";

const OrderHistory = () => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-md border-1 pb-6">
      <p className="px-6 py-4 text-xl font-semibold">История заказов</p>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-900">
            <td className="px-6 py-2">Номер</td>
            <td className="px-6 py-2">Дата оформления</td>
            <td className="px-6 py-2">Сумма</td>
            <td className="px-6 py-2">Статус</td>
            <td className="px-6 py-2"></td>
          </tr>
        </thead>
        <tbody className="before:block before:leading-3 before:text-transparent before:content-['-']">
          <tr className="text-gray-700">
            <td className="px-6 py-2">#1</td>
            <td className="px-6 py-2">22 сентября 2024</td>
            <td className="px-6 py-2">
              <span className="font-medium">100 руб. </span>(2 товара)
            </td>
            <td className="px-6 py-2">В обработке</td>
            <td className="underline-hover cursor-pointer px-6 py-2 text-primary">
              Подробнее
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination className="mt-6 self-center" />
    </div>
  );
};

export default OrderHistory;
