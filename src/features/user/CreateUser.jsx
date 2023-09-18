import { useState } from "react"
import Button from "../../ui/Button"



function CreateUser() {
   const [username, setUsername] = useState("")

   const handelSubmit = (e) => {
      e.preventDefault()
   }


   return (
      <form onSubmit={handelSubmit}>
         <p className="mb-4 text-sm text-stone-600 md:text-base">
            Welcome! Please start by telling us your name:</p>
         <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input w-72 mb-8" />
         {username !== "" && (
            <div>
               <Button type="primary">Start ordering</Button>
            </div>
         )}
      </form>
   )
}

export default CreateUser