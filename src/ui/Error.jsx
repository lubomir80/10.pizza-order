import { useRouteError } from "react-router"
import { Link } from "react-router-dom";


function Error() {
   const error = useRouteError()
   console.log(error)

   return (
      <div>
         Error
         <p>{error.data || error.message}</p>
         <Link to="/">Home</Link>
      </div >
   )
}

export default Error