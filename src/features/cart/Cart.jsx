import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import LinkButton from "../../ui/LinkButton"


function Cart() {
   return (
      <div>
         <div>
            <LinkButton to="/">
               &larr; Back to menu
            </LinkButton>
            <h2>Your cart, NAME</h2>
            <div>
               <Button to="/order/new">Order pizza</Button>
               <button>Clear cart</button>
            </div>
         </div>
      </div>
   )
}

export default Cart