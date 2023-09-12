import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout"


const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <div >Home</div>,
         },
         {
            path: "/menu",
            element: <div>Menu</div>
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
