import { Link } from "react-router-dom"


function Cart() {
   return (
      <div>
         <div>
            <Link to="/" className="text-sm text-blue-500 hover:text-blue-800">
               &larr; Back to menu
            </Link>
            <h2>Your cart, NAME</h2>
            <div>
               <Link to="/order/new">Order pizza</Link>
               <button>Clear cart</button>
            </div>
         </div>
      </div>
   )
}

export default Cart