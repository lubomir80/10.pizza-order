import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getTotalPriceSelector, getTotalQuantitySelector } from "../../Redux/Cart/selectors"
import { formatCurrency } from "../../utils/helpers"


function CartOverview() {
   const totalQty = useSelector(getTotalQuantitySelector)
   const totalPrice = useSelector(getTotalPriceSelector)


   if (!totalPrice) return null

   return (
      <div className="bg-stone-700 text-stone-300 uppercase px-4 py-4 sm:px-6
      text-sm md:text-base flex items-center justify-between">

         <p className=" font-semibold space-x-4 sm:space-x-6">
            <span>{totalQty} pizzas</span>
            <span>{formatCurrency(totalPrice)}</span>
         </p>
         <Link to="/cart">Open cart &rarr;</Link>
      </div>
   )
}

export default CartOverview