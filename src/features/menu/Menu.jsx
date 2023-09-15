import { useLoaderData } from 'react-router'
import { getMenu } from '../../services/apiRestaurant'

function Menu() {
   const menu = useLoaderData()
   console.log(menu)

   return (
      <ul>
         {menu.map(pizza =>
            <li key={pizza.id}>
               <img src={pizza.imageUrl} alt="" />
               {pizza.name}
            </li>)}
      </ul>
   )
}

export async function loader() {
   const menu = await getMenu()
   return menu
}

export default Menu