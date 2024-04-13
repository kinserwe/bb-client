import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { Link } from "react-router-dom";
import { deleteFromOrder, fetchOrder } from "../redux/slices/orderSlice.ts";
import { OrderItem } from "../types/order.ts";

interface CartItemProps {
  orderId: number;
  item: OrderItem;
}

const CartItem: FC<CartItemProps> = ({ orderId, item }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className="border-b-1">
      <td className="px-6 py-2">
        <Link
          to={`/catalog/${item.product.parent_category}/${item.product.category}/${item.product.id}`}
          className="underline-hover"
        >
          {item.product.name}
        </Link>
      </td>
      <td className="px-6 py-2">{item.product.price}</td>
      <td className="px-6 py-2">{item.quantity}</td>
      <td className="px-6 py-2">
        {(item.product.price * item.quantity).toFixed(2)} руб.
      </td>
      <td className="px-6 py-2">
        <button
          className="font-medium text-red-600"
          onClick={() =>
            dispatch(deleteFromOrder({ productId: item.id, orderId: orderId }))
          }
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const orderId = useAppSelector((state) => state.user.data?.order);
  const order = useAppSelector((state) => state.order.data);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrder(orderId));
    }
  }, [dispatch, orderId]);

  return (
    <>
      <div className="flex h-fit flex-1 border-collapse flex-col rounded-md border-1">
        {order && order.items.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-1 text-gray-900">
                <td className="px-6 py-2">Товар</td>
                <td className="px-6 py-2">Цена</td>
                <td className="px-6 py-2">Количество</td>
                <td className="px-6 py-2">Сумма</td>
                <td className="px-6 py-2"></td>
              </tr>
            </thead>
            <tbody>
              {orderId &&
                order.items.map((item) => (
                  <CartItem item={item} orderId={orderId} />
                ))}
            </tbody>
          </table>
        ) : (
          <span className="self-center justify-self-center">
            Ваша корзина пуста
          </span>
        )}
      </div>
      <div className="flex h-fit w-[360px] flex-col justify-between rounded-md border-1 p-6">
        <div className="grid border-collapse grid-cols-1 grid-rows-3">
          <div className="flex items-center justify-between py-3 not-last:border-b-1">
            <span>Сумма:</span>
            <span className="font-medium text-gray-800">
              {order?.total_cost}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 not-last:border-b-1">
            <span>Скидка:</span>
            <span className="font-medium text-gray-800">0 руб.</span>
          </div>
          <div className="flex items-center justify-between py-3 not-last:border-b-1">
            <span>Конечная сумма:</span>
            <span className="text-lg font-medium text-gray-800">
              {order?.total_cost.toFixed(2)} руб.
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="flex-shrink rounded-[44px] bg-primary p-3.5 font-semibold text-white transition-colors duration-200 hover:bg-hard-primary"
        >
          Оформить заказ
        </button>
      </div>
    </>
  );
};

export default Cart;
