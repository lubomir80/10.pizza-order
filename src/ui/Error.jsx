import { useRouteError } from "react-router"
import LinkButton from "./LinkButton";


function Error() {
   const error = useRouteError()
   console.log(error)

   return (
      <div>
         Error
         <p>{error.data || error.message}</p>
         <LinkButton to="-1">&larr; Go back</LinkButton>
      </div >
   )
}

export default Error