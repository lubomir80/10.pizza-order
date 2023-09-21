import { useSelector } from "react-redux"
import { userSelector } from "../Redux/User/selectors"
import CreateUser from "../features/user/CreateUser"
import Button from "./Button"


function Home() {
   const username = useSelector(userSelector)

   return (
      <div className="my-10 text-center">
         <h1 className="text-xl font-semibold mb-8 md:text-3xl sm:my-16">
            The best pizza.
            <br />
            <span className="text-yellow-500">
               Straight out of the oven, straight to you.
            </span>
         </h1>
         {username === "" ?
            <CreateUser /> :
            <Button to="/menu" type="primary">Back to ordering, {username}</Button>}
      </div>
   )
}

export default Home