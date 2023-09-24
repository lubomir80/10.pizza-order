import { userSelector } from "../../Redux/User/selectors"
import { useSelector } from "react-redux"



function Username() {
   const { username } = useSelector(userSelector)

   if (!username) return null;

   return (
      <div className="md:block hidden text-sm font-semibold">
         {username}
      </div>
   )
}

export default Username