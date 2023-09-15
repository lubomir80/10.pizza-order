import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"
import Menu, { loader as menuLoader } from "./features/menu/Menu"
import Error from "./ui/Error"

const router = createBrowserRouter([
   {
      element: <Layout />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <div >Home</div>,
         },
         {

            path: "/menu",
            element: <Menu />,
            loader: menuLoader,
            errorElement: <Error />,
         },
         {
            path: "/cart",
            element: <div>Cart</div>
         },
         {
            path: "/order/new",
            element: <div>Create Order</div>
         },
         {
            path: "/order/:orderId",
            element: <div>Order</div>
         },
      ]
   },

])


function App() {
   return <RouterProvider router={router} />
}

export default App
