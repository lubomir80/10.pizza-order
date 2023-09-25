import { useFetcher } from "react-router-dom";
import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant"
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";




//Test ID: IIDSAT or CQE92U
function Order() {
   const order = useLoaderData()
   const fetcher = useFetcher()


   useEffect(() => {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu")
   }, [fetcher])

   const {
      id,
      status,
      priority,
      orderPrice,
      estimatedDelivery,
      cart,
   } = order;
   const deliveryIn = calcMinutesLeft(order);



   return (
      <div className="py-6 px-4 space-y-8">
         <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xl font-semibold">
               Order #{id} status
            </h2>

            <div className="space-x-2">
               {priority && <span className="bg-red-500 rounded-full py-1 px-3 font-semibold
               uppercase text-red-50 tracking-wide">Priority</span>}
               <span className="bg-green-500 rounded-full py-1 px-3 font-semibold
               uppercase text-green-50 tracking-wide">{status} order</span>
            </div>
         </div>

         <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6">
            <p className="font-medium">
               {deliveryIn >= 0
                  ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                  : "Order should have arrived"}
            </p>
            <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
         </div>

         <ul className="divide-y divide-stone-200 border-b border-t">
            {cart.map(item => <OrderItem
               key={item.name} item={item}
               isLoadingIngredients={fetcher.state === "loading"}
               ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []} />)}
         </ul>


         <div className="space-y-2 bg-stone-200 py-5 px-6">
            <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
            {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(orderPrice * 0.2)}</p>}
            <p className="font-bold">To pay on delivery: {formatCurrency(priority ? orderPrice * 1.2 : orderPrice)}</p>
         </div>

         {!priority && <UpdateOrder />}
      </div>
   )
}

export async function loader({ params }) {
   const order = await getOrder(params.orderId);
   return order
}


export default Order
