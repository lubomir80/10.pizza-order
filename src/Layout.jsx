import Header from "./Header"
import { Outlet, useNavigation } from 'react-router'
import Loader from "./ui/Loader"

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

      </div>
   )
}

export default Layout