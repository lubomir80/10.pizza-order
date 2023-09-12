import Header from "./Header"
import { Outlet } from 'react-router'

function Layout() {
   return (
      <div>
         <Header />

         <main>
            <h1>Main</h1>
            <Outlet />
         </main>

      </div>
   )
}

export default Layout