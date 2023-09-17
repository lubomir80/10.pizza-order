import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./ui/Layout"
import Menu, { loader as menuLoader } from "./features/menu/Menu"
import Error from "./ui/Error"
import Cart from "./features/cart/Cart"
import Order, { loader as orderLoader } from "./features/order/Order"
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder"
import Home from "./ui/Home"

const router = createBrowserRouter([
   {
      element: <Layout />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {

            path: "/menu",
            element: <Menu />,
            loader: menuLoader,
            errorElement: <Error />,
         },
         {
            path: "/cart",
            element: <Cart />
         },
         {
            path: "/order/new",
            element: <CreateOrder />,
            action: createOrderAction,
            // errorElement: <Error />,
         },
         {
            path: "/order/:orderId",
            element: <Order />,
            loader: orderLoader,
            errorElement: <Error />,
         },
      ]
   },

])


function App() {
   return <RouterProvider router={router} />
}

export default App
