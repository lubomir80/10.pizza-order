import Header from "../Header"
import { Outlet, useNavigation } from 'react-router'
import Loader from "./Loader"
import CartOverview from "./CartOverview"

function Layout() {
   const navigation = useNavigation()
   const isLoading = navigation.state === "loading"

   return (
      <div>
         {isLoading && <Loader />}
         <Header />

         <main>
            <h1>Main</h1>
            <Outlet />
         </main>

         <CartOverview />

      </div>
   )
}

export default Layout