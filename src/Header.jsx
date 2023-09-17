import { Link } from 'react-router-dom'
import SearchOrder from './features/order/SearchOrder'
import Username from './features/user/Username'

function Header() {
   return (
      <header>
         <Link to="/" className='tracking-widest' >Fast React Pizzas Co.</Link>
         <SearchOrder />
         <Username />
      </header>
   )
}

export default Header