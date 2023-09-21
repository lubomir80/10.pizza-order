import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "../../Redux/Cart/cartSlice"


function CartDeleteBtn({ pizzaId }) {
   const dispatch = useDispatch()
   return (
      <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
         Delete
      </Button>
   )
}

export default CartDeleteBtn