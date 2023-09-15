import { Link } from 'react-router-dom'
import SearchOrder from './features/order/SearchOrder'

function Header() {
   return (
      <header>
         <Link to="/" >Fast React Pizzas Co.</Link>
         <SearchOrder />
         <p>L</p>
      </header>
   )
}

export default Header