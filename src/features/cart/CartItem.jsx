import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import CartDeleteBtn from "./CartDeleteBtn";
import UpdateItemQty from "./UpdateItemQty";
import { getCurrentQtyByIdSelector } from "../../Redux/Cart/selectors";

function CartItem({ item }) {
   const { pizzaId, name, quantity, totalPrice } = item;
   const currentQuantity = useSelector(getCurrentQtyByIdSelector(pizzaId))


   return (
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
         <p className="mb-1 sm:mb-0">
            {quantity}&times; {name}
         </p>
         <div className="flex justify-between items-center sm:gap-6">
            <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
            <UpdateItemQty pizzaId={pizzaId} currentQuantity={currentQuantity} />
            <CartDeleteBtn pizzaId={pizzaId} />
         </div>
      </li>
   )
}

export default CartItem