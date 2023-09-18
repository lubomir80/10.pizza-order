import Header from "../Header"
import { Outlet, useNavigation } from 'react-router'
import Loader from "./Loader"
import CartOverview from "./CartOverview"

function Layout() {
   const navigation = useNavigation()
   const isLoading = navigation.state === "loading"

   return (
      <div className="
      grid h-screen 
      grid-rows-[auto_1fr_auto]">
         {isLoading && <Loader />}

         <Header />

         <div className="overflow-y-scroll">
            <main className=" max-w-3xl mx-auto">
               <h1>Main</h1>
               <Outlet />
            </main>
         </div>

         <CartOverview />

      </div>
   )
}

export default Layout