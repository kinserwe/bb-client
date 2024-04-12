import { FC, useEffect, useState } from "react";
import { Order, OrderItem } from "../types.ts";
import { useAppSelector } from "../redux/store.ts";
import apiClient from "../axios.ts";

interface CartItemProps {
  orderId: number;
  item: OrderItem;
}

const CartItem: FC<CartItemProps> = ({ orderId, item }) => {
  const deleteItem = async () => {
    await apiClient.delete<void>(`api/orders/${orderId}`, {
      params: { item_id: item.id },
    });
  };

  return (
    <tr className="border-b-1">
      <td className="px-6 py-2">{item.product.name}</td>
      <td className="px-6 py-2">{item.product.price}</td>
      <td className="px-6 py-2">{item.quantity}</td>
      <td className="px-6 py-2">
        {(item.product.price * item.quantity).toFixed(2)} руб.
      </td>
      <td>
        <button className="font-medium text-red-600" onClick={deleteItem}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const orderId = useAppSelector((state) => state.user.data?.order);
  const [order, setOrder] = useState<Order>();

  const fetchOrder = async () => {
    const { data } = await apiClient.get<Order>(`api/orders/${orderId}`);
    return data;
  };

  useEffect(() => {
    fetchOrder().then((order) => setOrder(order));
  }, [orderId]);

  return (
    <div className="container flex border-collapse flex-col gap-y-6 rounded-md border-1 pb-6">
      <table className="w-full">
        <thead>
          <tr className="border-b-1 text-gray-900">
            <td className="px-6 py-2">Товар</td>
            <td className="px-6 py-2">Цена</td>
            <td className="px-6 py-2">Количество</td>
            <td className="px-6 py-2">Сумма</td>
          </tr>
        </thead>
        <tbody>
          {order &&
            orderId &&
            (order.items.map((item) => (
              <CartItem orderId={orderId} item={item} />
            )) || <span>Корзина пуста</span>)}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
